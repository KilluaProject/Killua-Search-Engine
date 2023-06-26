

import React from 'react'

export default function SearchBox() {


    function handleSubmit(e){
        e.preventDefault();
        if(!input.trim()) return;
        router.push(`/search/web?searchTerm=${input}`)
      }
  return (
    <form onSubmit={handleSubmit} className="p-3 border rounded-full  item-center flex items-center gap-1">
    <BsSearch className="mx-2"/>

    <input onChange={(e) => setInput(e.target.value)}
    value={input} type="text" placeholder="Cari apa aja yang lau mau asal gak kena INTERNET SEHAT...."
    className='flex-grow outline-none'/>

    <BsMicFill className="mx-2"/>
    
</form>

    
  )
}
