"use client"

import React from 'react'
import {BsSearch,BsMicFill} from 'react-icons/bs'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchBox() {


  return (
    <form className="flex border border-gray-300 rounded-full shadow-lg px-2 py-2 ml-10 mr-5 flex-grow max-w-3xl items-center w-full">
      <input type="text" />

    </form>
    
  )
}
