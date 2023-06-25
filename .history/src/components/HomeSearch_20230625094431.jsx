import React from 'react'
import {BsMicFill, BsSearch} from 'react-icons/bs'

import './globals.css'

export default function HomeSearch() {
  return (
    <div className=" xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-1/2 w-full p-5 flex flex-col gap-10">
        <form className="p-3 border rounded-full  item-center flex items-center gap-4">
            <BsSearch className=""/>
            <input type="text" placeholder="Cari apa aja yang lau mau asal gak kena INTERNET SEHAT...."
            className='flex-grow outline-none'  />
            <BsMicFill/>
            
        </form>
            <div className='space-x-20 flex justify-center items-center'>
              <button>Search</button>
              <button>Im not luck today</button>
               
            </div>
    </div>
  )
}
