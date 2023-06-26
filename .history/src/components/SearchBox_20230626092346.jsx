"use client"

import React from 'react'
import {BsSearch,BsMicFill} from 'react-icons/bs'
import {RxCross1} from 'react-icons/rx'
import { useSearchParams } from 'next/navigation';

export default function SearchBox() {

  const searchParams = useSearchParams();

  return (
    <form className="flex border border-gray-300 rounded-full shadow-lg px-5 py-2 ml-10 mr-5 flex-grow max-w-3xl items-center gap-3">
      
      <input className="w-full outline-none px-4 py-2" placeholder="lu bisa cari apa aja disini asal gak kena internet sehat" type="text" />
      <RxCross1 className="icons"/>
      <BsSearch className="icons"/>
      <BsMicFill className="icons"/>

    </form>
    
  )
}
