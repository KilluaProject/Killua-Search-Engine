

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
    <html lang="en" className="relative min-h-screen">

      
      <body className="bg-slate-700">
        
        
        {children}
        <Footer/>
        
        </body>
    </html>
  )
}
