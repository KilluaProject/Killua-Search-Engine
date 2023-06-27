"use client"

import { usePathname,useSearchParams } from 'next/navigation'
import {BiChevronRightCircle, BiChevronLeftCircle} from 'react-icons/bi'
import React from 'react'
import Link from 'next/link'

export default function PaginationButtons() {
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const searchTerm = searchParams.get("searchTerm")
    const startIndex = +searchParams.get("start")||1

  return (
    <div>
      {startIndex >= 2 (
        <div>
          <Link>
          <BiChevronLeftCircle/>
          </Link>
        </div>
      )}
       

    </div>
  )
}
