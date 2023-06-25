import Link from 'next/link'
import React from 'react'
import {LuLayoutGrid} from 'react-icons/lu'

export default function HomeHeader() {
  return (
    <header className="container mx-auto p-5 flex items-center justify-end">
        <div className="flex items-center gap-6 text-sm">
            <Link className="hover:underline" href="https://mail.google.com">Kmail</Link>
            <Link className="hover:underline" href="https://images.google.com">Images</Link>
            <LuLayoutGrid className="text-3xl bg-transparent hover:bg-gray-100 rounded-lg p-1"/>
            <button className="py-2 px-6 bg-blue-500 rounded-md hover:drop-shadow-md transition-transform duration-200 text-white flex">Sign in
            
            <svg className="transition-all animate-spin h-5 bg-black w-5"></svg>
            </button>

           


        </div>
    </header>
  )
}
