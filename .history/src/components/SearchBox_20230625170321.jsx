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

    <div>halo</div>

    
  )
}
