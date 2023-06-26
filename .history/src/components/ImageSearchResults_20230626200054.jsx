import React from 'react'

export default function ImageSearchResults({results}) {
  return (
    <div>
        <div className="">
            {results.items.map((result) => (
                <div></div>
            ))}
        </div>
    </div>
  )
}
