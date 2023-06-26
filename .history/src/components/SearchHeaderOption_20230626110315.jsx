"use client"

import React from 'react'
import {BsSearch,BsMicFill} from 'react-icons/bs'
import {AiFillPicture} from 'react-icons/ai'
import { usePathname,useRouter } from 'next/navigation'

export default function SearchHeaderOption() {
  const pathname = usePathname();
  const router = useRouter();
  
  function selectTab(tab){
    if( tab === "All"){
      
    }
  }

  return (
    <div className="flex mt-5 items-center">
      <div onClick={()=>selectTab("All")} 
      
      
      className={`flex items-center gap-1 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${pathname === "/search/web" && "text-blue-600 !border-blue-600"}`}>

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
