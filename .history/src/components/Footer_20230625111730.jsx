import CountryLookup from "./CountryLookup"

export default function Footer() {
  return (
   <footer>
       <div className="">
           <CountryLookup/>
           <div className="">
               <ul>
                   <li>About</li>
                   <li>Advertising</li>
                   <li>Business</li>
                   <li>How Search Works</li>
               </ul>
               <ul>
                   <li>Privacy</li>
                   <li>Terms</li>
                   <li>Settings</li>
               </ul>
           </div>
           
       </div>
   </footer>
  )
}
