'use client'

import { useEffect, useState } from 'react'
import Toggle from '@/components/navigation/components/toggle'
import { NavigationData } from '@/types/data'
import signatureData from '@/data/signature.json'
import navigationData from '@/data/navigation.json'
import Link from 'next/link'

export default function Menu() {
  const [menuOpened, setMenuOpened] = useState(false)

  useEffect(() => {
    if (menuOpened) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }

    return () => {
      document.body.classList.remove('no-scroll')
    }
  }, [menuOpened])

  const navigationKeymap = navigationData as NavigationData

  const toggle = () => {
    setMenuOpened((prevState) => !prevState)
  }

  return (
    <div className="menu" data-opened={menuOpened}>
      <Toggle callback={toggle} />
      <div className="menu__overlay">
        <div className="menu__overlay-wrapper">
          <nav className="menu__navigation">
            {Object.keys(navigationData).map((key) => {
              const { label, path } = navigationKeymap[key]
              return (
                <Link key={key} href={path} onClick={toggle} className="menu__navigation-item">
                  {label}
                </Link>
              )
            })}
          </nav>
          <div className="menu__signature">
            <div className="menu__signature-wrapper">
              <div className="menu__signature-title">Me trouver</div>
              <div className="menu__signature-item">{signatureData.address}</div>
              <div className="menu__signature-item">
                <span>
                  {signatureData.zip} {signatureData.city}
                </span>
              </div>
            </div>
            <div className="menu__signature-wrapper">
              <div className="menu__signature-title">Me contacter</div>
              <div className="menu__signature-item">{signatureData.phone}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
