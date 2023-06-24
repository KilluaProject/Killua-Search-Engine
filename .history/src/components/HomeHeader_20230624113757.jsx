import Link from 'next/link'
import React from 'react'
import {LuLayoutGrid} from 'react-icons/lu'

export default function HomeHeader() {
  return (
    <header>
        <div className="flex items-center gap-4">
            <Link className="hover:underline" href="https://mail.google.com">Kmail</Link>
            <Link className="hover:underline" href="https://images.google.com">Images</Link>
            <LuLayoutGrid className="text-xl bg-transparent hover:bg-gray-400 rounded-full"/>
            <button className="py-2 px-4 bg-pink-500 rounded-md">Sign in</button>

        </div>
    </header>
  )
}
