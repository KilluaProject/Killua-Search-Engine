import Link from 'next/link'
import React from 'react'
import Parser from 'html-react-parser'

export default function WebSearchResults({results}) {
  return (
    <div className="container px-4 w-full mx-auto" >

        <p className="text-gray-700 text-xs">
            About {results.searchInformation?.formattedTotalResults}results ({results.searchInformation?.formattedSearchTime} seconds)
        </p>
        {results.items?.map((result)=>(
            <div className="max-w-lg mt-2 bg-slate-400 " key={result.link}>
                <div className="group flex flex-col gap-3">
                    <Link className="text-xs truncate" href={result.link}>
                    {result.formattedUrl}
                    </Link>
                    <Link className="group-hover:underline decoration-blue-500 text-base truncate font-medium text-blue-500" href={result.link}>
                    {result.title}
                    </Link>
                </div>
                <p className="text-md ">
                    {Parser(result.htmlSnippet)}
                </p>

                <div>
                    hallo gaes
                </div>
            </div>
        ))}

    </div>
  )
}
