import Link from 'next/link'
import React from 'react'

export default function ImageSearchResults({results}) {
    
  return (
    <div className="container">
        <div className="">
            {results.items.map((result) => (

                <div key={result.link} className="">

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
