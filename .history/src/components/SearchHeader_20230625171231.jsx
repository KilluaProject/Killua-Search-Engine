

import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import SearchBox from './SearchBox'
import {AiFillSetting} from 'react-icons/ai'
import {BiSolidGrid} from 'react-icons/bi'


export default function SearchHeader() {
  return (
    <header className="container sticky top-0 bg-white w-full py-3">
        <div className="flex w-full items-center justify-between">
            <Link href={"/"}>
            
                <Image src={"/logo.png"} width={120} height={50}/>
            </Link>
            <div className="flex-1 bg-slate-400 text-center">
                <SearchBox/>
            </div>
            <div className="hidden md:inline-flex items-center gap-3">
                <AiFillSetting/>
                <BiSolidGrid/>
                <button className="py-2 px-6 bg-blue-500 rounded-md hover:drop-shadow-md transition-transform duration-200 text-white flex">Sign in
            </button>
            </div>
            
           
        </div>
    </header>
  )
}
