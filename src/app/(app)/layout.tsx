import React from 'react'
import localFont from 'next/font/local'
import { Roboto_Mono } from 'next/font/google'
import '@/styles/imports.scss'
import Navigation from '@/components/navigation'

const titleFont = localFont({
  src: '../../fonts/mystical_snow-webfont.woff2',
  variable: '--title-font',
  display: 'swap',
})

const contentFont = Roboto_Mono({
  subsets: ['latin'],
  variable: '--content-font',
  display: 'swap',
})

/* Our app sits here to not cause any conflicts with payload's root layout  */
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="fr" className={`${titleFont.variable} ${contentFont.variable}`}>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}

export default Layout
