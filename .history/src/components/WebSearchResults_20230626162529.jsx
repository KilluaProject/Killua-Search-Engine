import React from 'react'

export default function WebSearchResults({results}) {
  return (
    <div className="container p-5">

        <p>
            About {results.searchInformation?.formattedTotalResults}results ({results.searchInformation?.formattedSearchTime} seconds)
        </p>

    </div>
  )
}