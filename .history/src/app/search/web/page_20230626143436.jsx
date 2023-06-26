import React from 'react'

export default async function WebSearchPage() {

  const response = await fetch (
    `https://www.googleapis.com/customsearch/v1?key=${process.env.KILLUA_API}&cx=${process.env.CONTEXT_KEY}:omuauf_lfve&q=lectures
    `
    
  )

    const data = await response.json()
  return (
    <div>WebSearchPage</div>
  )
}
