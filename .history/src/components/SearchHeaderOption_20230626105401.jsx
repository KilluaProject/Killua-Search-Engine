"use client"

import React from 'react'
import {BsSearch,BsMicFill} from 'react-icons/bs'
import {AiFillPicture} from 'react-icons/ai'
import { usePathname } from 'next/navigation'

export default function SearchHeaderOption() {
  const pathname = usePathname();
  return (
    <div className="flex border-b mt-5">
      <div className={`flex items-center gap-1 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${pathname === "/search/web" && "text-blue-600 !border-blue-600"}`}>

        <BsSearch className="icons"/>
        <h1>All</h1>

      </div>
      <div className="flex items-center">
        <AiFillPicture/>
        <h1>images</h1>

      </div>
    </div>
  )
}
