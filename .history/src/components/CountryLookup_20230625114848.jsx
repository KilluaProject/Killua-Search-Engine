"use client"

import { useState } from "react"


export default function CountryLookup() {
  const [country,setCountry] = useState("Indonesia")
  return (
    <div>{country}</div>
  )
}
