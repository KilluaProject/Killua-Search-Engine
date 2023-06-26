"use client"

import React from 'react'
import {BsMicFill, BsSearch} from 'react-icons/bs'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function HomeSearch() {
  const router = useRouter();
  const [input, setInput] = useState("");
  const [randomSearchLoading, setSearchLoading] = useState(false);

  function handleSubmit(e){
    e.preventDefault();
    if(!input.trim()) return;
    router.push(`/search/web?searchTerm=${input}`)
  }

  async function randomSearch() {
    setSearchLoading(true);
    const response = await fetch ("https://random-word-api.herokuapp.com/word")
    .then ((res) => res.json())
    .then ((data) => data[0]);
    if(!response) return ;
    router.push(`/search/web?searchTerm=${response}`);
    setRandomSearchLoading()
  }


  
  return (

   
    <div className=" xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-1/2 w-full p-5 flex flex-col gap-10">


        <form onSubmit={handleSubmit} className="p-3 border rounded-full  item-center flex items-center gap-1">
            <BsSearch className="mx-2"/>

            <input onChange={(e) => setInput(e.target.value)}
            value={input} type="text" placeholder="Cari apa aja yang lau mau asal gak kena INTERNET SEHAT...."
            className='flex-grow outline-none'/>

            <BsMicFill className="mx-2"/>
            
        </form>

            <div className='gap-2 flex flex-col justify-center items-center sm:flex-row '>
              <button onClick={handleSubmit} className="btn">Search</button>
              <button disabled={randomSearchLoading}
              onClick={randomSearch} className="btn flex items-center justify-center disabled:opacity-80">
                {randomSearchLoading ? (
                  <img className="h-5 text-center" src="spinner.svg" alt="Loading..." />) : ( "Im Feeling not luck ")}
                </button>
               
            </div>
    </div>
  )
}
