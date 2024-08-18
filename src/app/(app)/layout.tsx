import React from 'react'
import localFont from 'next/font/local'
import { Vibur, Roboto } from 'next/font/google'
import Navigation from '../../components/navigation'
import '../../styles/imports.scss'

const titleFont = localFont({
  src: '../../fonts/mystical_snow-webfont.woff2',
  variable: '--title-font',
  display: 'swap',
})

const descriptionFont = Roboto({
  subsets: ['latin'],
  variable: '--description-font',
  weight: ['400'],
  display: 'swap',
})

const contentFont = Vibur({
  subsets: ['latin'],
  variable: '--content-font',
  weight: ['400'],
  display: 'swap',
})

/* Our app sits here to not cause any conflicts with payload's root layout  */
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html
      lang="fr"
      className={`${titleFont.variable} ${contentFont.variable} ${descriptionFont.variable}`}
    >
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}

export default Layout
