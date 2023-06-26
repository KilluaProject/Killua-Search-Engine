"use client"

import React from 'react'
import {BsSearch,BsMicFill} from 'react-icons/bs'
import {AiFillPicture} from 'react-icons/ai'
import { usePathname,useRouter,useSearchParams } from 'next/navigation'
import { LuRadioTower } from 'react-icons/lu'

export default function SearchHeaderOption() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams()
  const searchTerm = searchParams.get("searchTerm")
  
  function selectTab(tab){
      router.push(`/search/${tab === "Images"?"image":"web"}?searchTerm=${searchTerm}`);
    
  }

  return (
    <div className="flex mt-5 items-center">
      <div onClick={()=>selectTab("All")} 
      className={`flex items-center gap-1 border-transparent border-b-2 active:text-blue-500 cursor-pointer pb-3 px-2 ${pathname === "/search/web" && "text-blue-600 border-blue-600"}`}>

        <BsSearch className="icons"/>
        <h1>All</h1>
      </div>

      <div onClick={()=>selectTab("images")} 
      className={`flex items-center gap-1 border-transparent border-b-2 active:text-blue-500 cursor-pointer pb-3 px-2 ${pathname === "/search/image" && "!text-blue-600 !border-blue-600"}`}>

        <AiFillPicture className="icons"/>
        <h1>Images</h1>
      </div>
    </div>
  )
}
