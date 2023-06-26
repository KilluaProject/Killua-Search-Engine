

import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import SearchBox from './SearchBox'
import {AiFillSetting} from 'react-icons/ai'
import {BiSolidGrid} from 'react-icons/bi'


export default function SearchHeader() {
  return (
    <div>
        <div className="">
            <Link href={"/"}>
            
                <Image src={"/logo.png"} width={120} height={50}/>
            </Link>
            <div className="">
                <SearchBox/>
            </div>
            <div className="">
                <AiFillSetting/>
                <BiSolidGrid/>
            </div>
        </div>
    </div>
  )
}
