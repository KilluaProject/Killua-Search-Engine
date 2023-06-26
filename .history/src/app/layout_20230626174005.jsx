

import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Killua-SearchEngine',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="">

      
      <body className="relative min-h-fit bg-slate-600">
        
        
        {children}
        <Footer/>
        
        </body>
    </html>
  )
}