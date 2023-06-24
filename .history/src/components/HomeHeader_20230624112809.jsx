import Link from 'next/link'
import React from 'react'

export default function HomeHeader() {
  return (
    <header>
        <div className="">
            <Link href="https://mail.google.com">Kmail</Link>
            <Link href="https://images.google.com">Images</Link>
        </div>
    </header>
  )
}
