

import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import SearchBox from './SearchBox'
import {AiFillSetting} from 'react-icons/ai'
import {BiSolidGrid} from 'react-icons/bi'


export default function SearchHeader() {
  return (
    <header className="container mx-auto py-6">
        <div className="flex items-center justify-between">
            <Link href={"/"}>
            
                <Image src={"/logo.png"} width={120} height={50}/>
            </Link>
            <div className="">
                <SearchBox/>
            </div>
            <div className="flex items-center justify-between gap-2">
                <AiFillSetting/>
                <BiSolidGrid/>
                <button className="py-2 px-6 bg-blue-500 rounded-md hover:drop-shadow-md transition-transform duration-200 text-white flex">Sign in
            </button>
            </div>
           
        </div>
    </header>
  )
}
