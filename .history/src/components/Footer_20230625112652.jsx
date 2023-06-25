import CountryLookup from "./CountryLookup"

export default function Footer() {
  return (
   <footer className="absolute w-full bottom-0 bg-gray-100">
       <div className="container p-6">
           <div className="border-b bg-gray-100">

           <CountryLookup/>
           </div>
           <div className="flex flex-col sm:flex-row justify-between items-center py-3 space-y-7">
               <ul className="flex item-center gap-2">
                   <li className="link">About</li>
                   <li className="link">Advertising</li>
                   <li className="link">Business</li>
                   <li className="link">How Search Works</li>
               </ul>
               <ul className="flex item-center gap-2">
                   <li className="link">Privacy</li>
                   <li className="link">Terms</li>
                   <li className="link">Settings</li>
               </ul>
           </div>
           
       </div>
   </footer>
  )
}
