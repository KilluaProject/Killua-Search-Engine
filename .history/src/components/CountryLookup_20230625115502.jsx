"use client"

import { useState,useEffect } from "react"



export default function CountryLookup() {
  const [country,setCountry] = useState("Indonesia");
  useEffect(()=> {
    fetch(`https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_API_KEY}`)
    .then((res)=> res.json())
    .then((data)=> setCountry(data.country)),[];
  })
  return (
    <div>{country}</div>
  )
}
