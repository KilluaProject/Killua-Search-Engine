import Link from 'next/link'
import React from 'react'
import {LuLayoutGrid} from 'react-icons/lu'

export default function HomeHeader() {
  return (
    <header>
        <div className="">
            <Link className="hover:underline" href="https://mail.google.com">Kmail</Link>
            <Link className="hover:underline" href="https://images.google.com">Images</Link>
            <LuLayoutGrid/>

        </div>
    </header>
  )
}
