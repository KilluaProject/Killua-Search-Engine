
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import SearchHeader from '@/components/SearchHeader'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Killua-SearchEngine',
  description: 'Generated by create next app',
}

export default function SearchLayout({ children }) {
  return (
  

      
      <section className={inter.className}>
        
        <SearchHeader/>
        {children}
        <Footer/>
        
        </section>
  
  )
}
