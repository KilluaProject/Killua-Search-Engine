


import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import SearchHeader from '@/components/SearchHeader'

const inter = Inter({ subsets: ['latin'] })

export default function SearchLayout({ children }) {
  return (
  
      <section>
        
        <SearchHeader/>
        {children}
        <Footer/>
        
        </section>
  
  )
}
