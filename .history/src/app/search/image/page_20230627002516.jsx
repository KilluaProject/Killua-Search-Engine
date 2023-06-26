import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
import ImageSearchResults from '@/components/ImageSearchResults';

export default async function ImageSearchPage({searchParams}) {

  const response = await fetch (
    `https://www.googleapis.com/customsearch/v1?key=${process.env.KILLUA_API}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}&searchType=Image
    `
  );

  
  if(!response.ok){
    throw new Error("Makanya jangan nyari bokep")
  }

    const data = await response.json()
    const results = data.items;
    if(!results){
      return (
        <div className="container mt-7 flex flex-col items-center justify-center gap-2">
          <h1 className="text-2xl font-bold">Ups... Not Found</h1>
          <p className="text-md">Mybe you can input another keywords or back to <Link className="text-blue-500 underline" href="/">Homepage</Link></p>
          <Image width={600} height={200} src={"/error-image.png"}/>
        </div>
      )
    }


  return (
    <div>

      {results && <ImageSearchResults results={data}/>}

    </div>
  )
}
