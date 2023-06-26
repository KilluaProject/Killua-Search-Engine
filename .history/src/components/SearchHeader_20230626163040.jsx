

import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import SearchBox from './SearchBox'
import {AiFillSetting} from 'react-icons/ai'
import {BiSolidGrid} from 'react-icons/bi'
import SearchHeaderOption from './SearchHeaderOption'


export default function SearchHeader() {
  return (
    <header className="container sticky top-0 bg-white w-full sm: py-5 p-3">
        <div className="flex w-full items-center justify-between">
            <Link href={"/"}>
            
                <Image src={"/logo.png"} width={120} height={50} alt="logo-header"/>
            </Link>
            <div className="flex-1 text-center">
                <SearchBox/>
            </div>
            <div className="hidden md:inline-flex items-center gap-3">
                <AiFillSetting className="icons"/>
                <BiSolidGrid className="icons"/>
               
            </div>
            <button className="py-2 px-6  bg-blue-500 rounded-md hover:drop-shadow-md transition-transform duration-200 text-white ml-3">Sign in
            </button>
        </div>
        <SearchHeaderOption/>
    </header>
  )
}
