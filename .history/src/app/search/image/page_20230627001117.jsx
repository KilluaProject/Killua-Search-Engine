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
    console.log('data5', data.items[5])
    
    const results = data.items;

    if(!results){
      return (
        <div className="container mt-7 flex flex-col items-center justify-center gap-2">
          <h1 className="text-2xl">Kagak nemu gue nyari</h1>
          <p className="">Coba dah lu ngetik yang beneran dikit gtu...</p>
          <Image width={600} height={200} src={"/error-image.png"}/>
          <Link className="bg-blue-500 px-4 py-2 rounded-md text-white hover:drop-shadow-lg hover:scale-105" href="/">Homepage</Link>
        </div>
      )
    }


  return (
    <div>

      {results && <ImageSearchResults results={data}/>}

    </div>
  )
}
