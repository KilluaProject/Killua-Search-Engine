"use client"

import React from 'react'
import {BsSearch,BsMicFill} from 'react-icons/bs'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchBox() {

     const router = useRouter();
     const [input, setInput] = useState("");
    function handleSubmit(e){
        e.preventDefault();
        if(!input.trim()) return;
        router.push(`/search/web?searchTerm=${input}`)
      }


  return (
    <form onSubmit={handleSubmit} className="p-1  border rounded-full  item-center flex items-center gap-1">
        <BsSearch className="mx-2"/>

        <input onChange={(e) => setInput(e.target.value)}
        value={input} type="text" placeholder="Cari apa aja yang lau mau asal gak kena INTERNET SEHAT...."
        className='flex-grow outline-none'/>
        
    </form>


    
  )
}
