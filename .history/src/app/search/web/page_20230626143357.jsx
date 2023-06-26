import React from 'react'

export default async function WebSearchPage() {

  const response = await fetch (
    `GET https://www.googleapis.com/customsearch/v1?key=${process.env.KILLUA_API}&cx=${process.env.CONTEXT_KEY}&q=lectures
    `
    
  )

    const data = await response.json()
  return (
    <div>WebSearchPage</div>
  )
}