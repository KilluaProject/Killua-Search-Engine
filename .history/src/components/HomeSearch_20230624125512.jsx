import React from 'react'
import {BsMicFill, BsSearch} from 'react-icons/bs'

export default function HomeSearch() {
  return (
    <div className="container p-5">
        <form className="p-2 border rounded-full  item-center flex items-center p-3">
            <BsSearch/>
            <input type="text" placeholder="Cari apa aja yang lau mau asal gak kena INTERNET SEHAT...."
            className='flex-grow'  />
            <BsMicFill/>
        </form>
    </div>
  )
}
