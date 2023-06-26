import React from 'react'

export default function WebSearchResults({results}) {
  return (
    <div className="container px-4 w-full mx-auto">

        <p className="text-gray-700 text-xs">
            About {results.searchInformation?.formattedTotalResults}results ({results.searchInformation?.formattedSearchTime} seconds)
        </p>

    </div>
  )
}
