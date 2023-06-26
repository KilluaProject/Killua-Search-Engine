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
        <div>
          <h1>KAGAK ADA HASIL, LU NYARI APAAN SI ? NGETIK YANG BENER !!</h1>
          <p>COBA CARI YANG LAIN, ATAU BALIK LAGI SONO KE HOME</p>
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
