import Link from 'next/link'
import React from 'react'

export default function ImageSearchResults({results}) {
    
  return (
    <div className="container pb-24 mt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 space-x-4">
            {results.items.map((result) => (

                <div key={result.link} className="mb-8">

                    <div className="group">
                        <Link href={result.image.contextLink}>
                            <img className="h-60 group-hover:shadow-xl w-full object-contain transition-shadow duration-200" src={result.imaga?.thumbnailLink}  alt={result.title}></img>
                        </Link>
                        <Link href={result.image.contextLink}>
                            <h2 className="group-hover:underline truncate text-xl">{result.title}</h2>
                        </Link>
                        <Link href={result.image.contextLink}>
                            <p className="group-hover:underline text-gray-600">{result.displayLink}</p>
                        </Link>
                        
                    </div>

                </div>
            ))}
        </div>
    </div>
  )
}
