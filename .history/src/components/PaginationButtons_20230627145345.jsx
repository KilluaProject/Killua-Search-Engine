"use client"

import { usePathname,useSearchParams } from 'next/navigation'
import {BiChevronRightCircle, BiChevronLeftCircle} from 'react-icons/bi'
import React from 'react'
import Link from 'next/link'

export default function PaginationButtons() {
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const searchTerm = searchParams.get("searchTerm")
    const startIndex = +searchParams.get("start")
  return (
    <div className="bg-slate-500">
        {startIndex >= 10 &&(
            <Link href={`${pathname}?searhTerm=${searchTerm}&start=${startIndex - 10}`}>
            <div>
            <BiChevronLeftCircle/>
            <p>Previous</p>
            </div>
            
            </Link>
        )}


        
        
        
    </div>
  )
}
