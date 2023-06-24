import Link from 'next/link'
import React from 'react'
import {LuLayoutGrid} from 'react-icons/lu'

export default function HomeHeader() {
  return (
    <header className="flex items-center justify-end gap-4">
        <div className="">
            <Link className="hover:underline" href="https://mail.google.com">Kmail</Link>
            <Link className="hover:underline" href="https://images.google.com">Images</Link>
            <LuLayoutGrid className="text-4xl bg-transparent hover:bg-gray-400 rounded-lg p-1"/>
            <button className="py-2 px-6 bg-pink-500 rounded-md">Sign in</button>

        </div>
    </header>
  )
}
