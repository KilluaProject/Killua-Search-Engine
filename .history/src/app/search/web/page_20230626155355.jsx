import Link from 'next/link';
import React from 'react'

export default async function WebSearchPage({searchParams}) {

  const response = await fetch (
    `https://www.googleapis.com/customsearch/v1?key=${process.env.KILLUA_API}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}
    `
    
  );

  if(!response.ok){
    throw new Error("Makanya jangan nyari bokep")
  }

    const data = await response.json()
    const results = data.items;

    if(!results){
      return (
        <div className="container mt-7 flex flex-col items-center justify-center">
          <h1>KAGAK ADA HASIL, LU NYARI APAAN SI ? NGETIK YANG BENER !!</h1>
          <p>COBA CARI YANG LAIN, ATAU BALIK KE HOME SANA, TUH KLIK TOMBOL DI BAWAH</p>
          <Link className="bg-blue-400 px-4 py-2 rounded-md text-white hover:drop-shadow-lg hover:scale-110" href="/">BALIK KE HOME</Link>
        </div>
      )
    }


  return (
    <div>

      {results && results.map((result) =>
      <h1>{result.title}</h1>)}

    </div>
  )
}
