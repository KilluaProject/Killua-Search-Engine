import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import SearchBox from './SearchBox'


export default function SearchHeader() {
  return (
    <header>
        <div className="">
            <Link href={"/"}>
            
                <Image src={"/logo.png"} width={120} height={50}/>
            </Link>
            <div className="">
                <SearchBoxx/>
            </div>
        </div>
    </header>
  )
}
