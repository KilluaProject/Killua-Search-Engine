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
    <div className="">
      {startIndex >= 10 && (
        <div className="">
          <Link className="flex items-center gap-2" href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex - 10}`}>
          <BiChevronLeftCircle className="text-lg"/>
          <p>Previuse</p>
          </Link>
        </div>
      )}
      {startIndex <= 90 && (
        <div>
          <Link href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex + 10}`}>
          <BiChevronRightCircle/>
          <p>Next</p>
          </Link>
        </div>
      )}
       

    </div>
  )
}
