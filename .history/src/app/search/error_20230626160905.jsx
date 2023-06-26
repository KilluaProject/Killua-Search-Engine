"use client"

import React from 'react'
import { useEffect } from 'react'

export default function Error({error,reset}) {
    useEffect(()=>{
        console.log("Error:",error);

    }, [error]);
    
  return (
    <div className="flex flex-col justify-center items-center container mt-7 gap-2">
        <h1 className="text-2xl">Makanya jangan nyari bokep!!!</h1>
        <button className="bg-blue-500 py-2 px-4" onClick={()=> reset()}>Coba Lagi sono</button>
    </div>

  )
}
