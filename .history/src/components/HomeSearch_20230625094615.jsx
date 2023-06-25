import React from 'react'
import {BsMicFill, BsSearch} from 'react-icons/bs'

export default function HomeSearch() {
  return (
    <div className=" xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-1/2 w-full p-5 flex flex-col gap-10">
        <form className="p-3 border rounded-full  item-center flex items-center gap-1">
            <BsSearch className=""/>
            <input type="text" placeholder="Cari apa aja yang lau mau asal gak kena INTERNET SEHAT...."
            className='flex-grow outline-none'  />
            <BsMicFill/>
            
        </form>

            <div className='space-x-5 flex justify-center items-center'>
              <button className="btn">Search</button>
              <button className='btn'>Im not luck today</button>
               
            </div>
    </div>
  )
}
