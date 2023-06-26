import React from 'react'

export default function WebSearchResults({results}) {
  return (
    <div className="container px-4">

        <p>
            About {results.searchInformation?.formattedTotalResults}results ({results.searchInformation?.formattedSearchTime} seconds)
        </p>

    </div>
  )
}
