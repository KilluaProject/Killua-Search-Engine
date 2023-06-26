import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export default function SearchHeader() {
  return (
    <header>
        <div className="">
            <Link href={"/"}>
            
                <Image width={300} height={100}/>
            </Link>
        </div>
    </header>
  )
}
