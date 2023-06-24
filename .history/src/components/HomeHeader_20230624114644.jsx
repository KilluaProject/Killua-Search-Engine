import Link from 'next/link'
import React from 'react'
import {LuLayoutGrid} from 'react-icons/lu'

export default function HomeHeader() {
  return (
    <header className="container mx-auto p-5 sm:p-0 bg-red-200 flex items-center justify-end">
        <div className="flex items-center gap-6 text-xs">
            <Link className="hover:underline" href="https://mail.google.com">Kmail</Link>
            <Link className="hover:underline" href="https://images.google.com">Images</Link>
            <LuLayoutGrid className="text-4xl bg-transparent hover:bg-gray-400 rounded-lg p-1"/>
            <button className="py-2 px-6 bg-pink-500 rounded-md">Sign in</button>

        </div>
    </header>
  )
}
