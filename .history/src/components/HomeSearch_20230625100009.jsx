"use client"

import React from 'react'
import {BsMicFill, BsSearch} from 'react-icons/bs'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function HomeSearch() {
  
  const [input, setInput] = useState("");
  function handelSubmit(e){
    e.prevenDefault();
    if(!input.trim()) return;
    router.push(`search/web?searchTerm${input}`)
  }

  
  return (

   
    <div className=" xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-1/2 w-full p-5 flex flex-col gap-10">


        <form onSubmit={handelSubmit} className="p-3 border rounded-full  item-center flex items-center gap-1">
            <BsSearch className="mx-2"/>
            <input onChange={(e) => setInput(e.target.value)}
            value={input} type="text" placeholder="Cari apa aja yang lau mau asal gak kena INTERNET SEHAT...."
            className='flex-grow outline-none'  />
            <BsMicFill className="mx-2"/>
            
        </form>

            <div className='gap-2 flex flex-col justify-center items-center sm:flex-row '>
              <button className="btn">Search</button>
              <button className='btn'>Im not luck today</button>
               
            </div>
    </div>
  )
}
