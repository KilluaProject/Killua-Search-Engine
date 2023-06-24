import React from 'react'
import {BsMicFill, BsSearch} from 'react-icons/bs'

export default function HomeSearch() {
  return (
    <div className="container p-5">
        <form className="p-3 border rounded-full  item-center flex items-center gap-4">
            <BsSearch className=""/>
            <input type="text" placeholder="Cari apa aja yang lau mau asal gak kena INTERNET SEHAT...."
            className='flex-grow outline-none'  />
            <BsMicFill/>
        </form>
    </div>
  )
}
