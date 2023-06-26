import React from 'react'
import {BsSearch,BsMicFill} from 'react-icons/bs'

export default function SearchHeaderOption() {
  return (
    <div>
      <div className="">
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
