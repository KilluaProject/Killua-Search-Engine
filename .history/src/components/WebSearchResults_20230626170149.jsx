import Link from 'next/link'
import React from 'react'
import Parser from 'html-react-parser'

export default function WebSearchResults({results}) {
  return (
    <div className="container px-4 w-full mx-auto">

        <p className="text-gray-700 text-xs">
            About {results.searchInformation?.formattedTotalResults}results ({results.searchInformation?.formattedSearchTime} seconds)
        </p>
        {results.items?.map((result)=>(
            <div className="max-w-lg mb-8 " key={result.link}>
                <div className="group">
                    <Link className="text-sm truncate" href={result.link}>
                    {result.formattedUrl}
                    </Link>
                    <Link className="group-hover:underline decoration-blue-500" href={result.link}>
                    {result.title}
                    </Link>
                </div>
                <p className="text-xl truncate font-medium">
                    {Parser(result.htmlSnippet)}
                </p>
            </div>
        ))}

    </div>
  )
}
