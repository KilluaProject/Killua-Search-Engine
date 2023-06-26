

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
    <html lang="en">

      
      <body className=" relative min-h-max mt-10">
        
        
        {children}

        <Footer/>
        
        </body>
    </html>
  )
}
