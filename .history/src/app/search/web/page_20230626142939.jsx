import React from 'react'

export default async function WebSearchPage() {

  const response = await fetch (
    `GET https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API}&cx=${process.env.CONTEXT_KEY}:omuauf_lfve&q=lectures
    `
    
  )


  return (
    <div>WebSearchPage</div>
  )
}
