import Image from "next/image";
import React from "react";
import Link from "next/link";

const Page = async () => {
  const allMeme = await fetch('https://api.imgflip.com/get_memes');
  const response = await allMeme.json()
  console.log(response.data.memes)
  interface data {
    url: string;
    id: string;
    box_count: number;

  }


return (
  <>
  <div className="mx-auto container ">
    <h1 className=" text-center text-3xl font-bold mt-4 text-white p-4">Meme Generator</h1>
  <div className="flex flex-wrap justify-between mt-10 gap-5"> 
    { response.data.memes.map((item:data , index:number ) => (
              <div>
            <Image key={item.id} src={item.url} width={300} height={300} alt="img"/>
            <button className="mt-4 bg-blue-700   p-2 rounded-md">
              <Link href={{
              pathname: "creatememe",
              query: {
                url: item.url,
                id: item.id
              }
            }}>generate Meme</Link></button>

            </div>
             ) )}
          </div>
  </div>
  </>
);
}

export default Page