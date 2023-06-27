"use client"

import { usePathname,useSearchParams } from 'next/navigation'
import {BiChevronRightCircle, BiChevronLeftCircle} from 'react-icons/bi'
import React from 'react'
import Link from 'next/link'

export default function PaginationButtons() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const searchTerm = searchParams.get("searchTerm");
    const startIndex = +searchParams.get("start")||1;

  return (
    <div>
      {startIndex <= 10 && (
        <div>
          <Link href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex + 10}`}>
          <BiChevronLeftCircle/>
          <p>Next</p>
          </Link>
        </div>
      )}
       

    </div>
  )
}
