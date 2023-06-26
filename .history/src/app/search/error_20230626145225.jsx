"use client"

import React from 'react'
import { useEffect } from 'react/cjs/react.development'

export default function Error({error,reset}) {
    useEffect(()=>{
        console.log("Error:",error);

    }, [error]);
    
  return (
    <div>
        <h1>Makanya jangan nyari bokep!!!</h1>
        <button onClick={()=> reset()}>Coba Lagi sono</button>
    </div>

  )
}
