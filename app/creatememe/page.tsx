"use client"

import Image from 'next/image';
import React, { useRef, useState } from 'react'

const CreateMeme = ({searchParams}: {searchParams: {id: string; url: string}}) => {

    const [meme , setMeme] = useState<string | null>(null);
    const text1 = useRef<HTMLInputElement>(null)
    const text2 = useRef<HTMLInputElement>(null)


    const createMeme = async(event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        console.log(text1.current?.value);
        console.log(text2.current?.value);

        const data = await fetch(`https://api.imgflip.com/caption_image?template_id=${searchParams.id}&username=mabdullah6600&password=asdfgfdsa123&text0=${text1.current?.value}&text1=${text2.current?.value}` , {
            method: 'POST'
        })
        const response = await data.json()
        console.log(response);
        setMeme(response.data.url)
        
    }
    
  return (
    <>
    <h1 className='item-center font-bold  bg-white text-center text-4xl'>Create Meme</h1>
    <Image src={searchParams.url} width={350} height={350} alt='meme' className='mx-auto p-4'/>

    <form onSubmit={createMeme} className='flex flex-wrap justify-center gap-4'>
        <input type="text" placeholder='enter text 1' ref={text1} className='p-2 rounded-md '/>
        <input type="text" placeholder='enter text 2' ref={text2} className='p-2 rounded-md '/>
        <button type='submit' className='bg-white p-2 rounded-md m-2' >create meme</button>
    </form>

    {meme ? <Image src={meme} width={350} height={350} alt='meme' className='mx-auto p-4'/> : null}
    </>
  )
}

export default CreateMeme 