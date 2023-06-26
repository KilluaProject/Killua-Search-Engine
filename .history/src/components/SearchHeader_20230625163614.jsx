"use client"

import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import SearchBox from './SearchBox'
import {IoSettingsSharp} from 'react-icons/io'


export default function SearchHeader() {
  return (
    <header>
        <div className="">
            <Link href={"/"}>
            
                <Image src={"/logo.png"} width={120} height={50}/>
            </Link>
            <div className="">
                <SearchBox/>
            </div>
            <div>
            <IoSettingsSharp/>
            </div>
        </div>
    </header>
  )
}
