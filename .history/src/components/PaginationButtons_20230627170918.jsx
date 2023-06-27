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
    <div className="flex gap-5 justify-center">
      {startIndex >= 12 && (
        <div className="">
          <Link className="flex items-center gap-2" href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex - 10}`}>
          <BiChevronLeftCircle className="text-xl"/>
          <p>Previuse</p>
          </Link>
        </div>
      )}
      {startIndex <= 90 && (
        <div>
          <Link className="flex items-center gap-2" href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex + 10}`}>
          <BiChevronRightCircle className="text-xl"/>
          <p>Next</p>
          </Link>
        </div>
      )}
       

    </div>
  )
}
