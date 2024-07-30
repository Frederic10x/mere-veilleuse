'use client'

import { useEffect, useState } from 'react'
import Toggle from '@/components/navigation/components/Toggle'

export default function Menu() {
  const [menuOpened, setMenuOpened] = useState(false)

  const toggle = () => {
    setMenuOpened((prevState) => !prevState)
  }

  return (
    <div className="menu" data-opened={menuOpened}>
      <Toggle callback={toggle} />
    </div>
  )
}
