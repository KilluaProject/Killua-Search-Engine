import React from 'react'
import {BsSearch,BsMicFill} from 'react-icons/bs'
import {AiFillPicture} from 'react-icons/ai'

export default function SearchHeaderOption() {
  return (
    <div>
      <div className="flex items-center">
        <BsSearch className="icons"/>
        <h1>All</h1>
      </div>
      <div className="">
        <AiFillPicture/>
        <h1>images</h1>

      </div>
    </div>
  )
}
