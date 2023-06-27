"use client"

import { usePathname,useSearhParams } from 'next/navigation'

import React from 'react'

export default function PaginationButtons() {
    const pathname = usePathname()
    const searchParams = useSearhParams()
  return (
    <div>PaginationButtons</div>
  )
}
