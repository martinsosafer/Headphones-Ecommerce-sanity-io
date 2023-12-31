import { Footer, } from '@/component'
import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from '@/component/NavBar'
import { GlobalStateContext } from './context/store'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Headphones and tech store',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      
      <body className={inter.className}>
            <GlobalStateContext>
        <div className='layout'>
          <NavBar />
          <div className='main-container'>
              <Toaster/>
            {children}
              
          </div>
          <Footer/>
        </div>
            </GlobalStateContext>
      </body>
    </html>
  )
}
