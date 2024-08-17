'use client'
import * as React from 'react'
import { motion } from 'framer-motion'

type Props = {
  children: React.ReactNode
  height?: number
  gradientColor?: string
}

export default function Collapsible({ gradientColor = '#fff', height = 150, children }: Props) {
  const [opened, setOpened] = React.useState(false)
  const [hasOverflow, setHasOverflow] = React.useState(true)
  const classes = `collapsible ${hasOverflow ? 'overflow' : ''} ${opened ? 'opened' : ''}`
  const parentRef = React.useRef<HTMLDivElement>(null)
  const childrenRef = React.useRef<HTMLDivElement>(null)

  const toggleOpen = () => {
    setOpened(!opened)
  }

  const message = opened ? 'Masquer' : 'Afficher plus'

  React.useEffect(() => {
    const parentHeight = parentRef.current?.offsetHeight
    const childrenHeight = childrenRef.current?.offsetHeight

    if (Number(childrenHeight) > Number(parentHeight)) {
      setHasOverflow(true)
    }
  }, [])

  return (
    <div className="collapsible-wrapper">
      <motion.div
        ref={parentRef}
        animate={{
          height: opened || !hasOverflow ? 'auto' : height,
        }}
        initial={{ height }}
        // @ts-ignore
        className={classes}
        style={{ '--gradient-color': gradientColor } as React.CSSProperties}
      >
        <div ref={childrenRef}>{children}</div>
      </motion.div>
      {hasOverflow && (
        <button className="message" onClick={toggleOpen}>
          {message}
        </button>
      )}
    </div>
  )
}
