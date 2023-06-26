import Link from 'next/link'
import React from 'react'

export default function ImageSearchResults({results}) {
    
  return (
    <div className="container pb-24 mt-4">
        <div className="">
            {results.items.map((result) => (

                <div key={result.link} className="fle">

                    <div className="group">
                        <Link href={result.image.contextLink}>
                            <img src={result.link} alt={result.title}></img>
                        </Link>
                        <Link href={result.image.contextLink}>
                            <h2>{result.title}</h2>
                        </Link>
                        <Link href={result.image.contextLink}>
                            <p>{result.displayLink}</p>
                        </Link>
                        
                    </div>

                </div>
            ))}
        </div>
    </div>
  )
}
