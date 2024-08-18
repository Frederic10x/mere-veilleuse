'use client'
import * as React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { createPortal } from 'react-dom'
import { FaTimes, FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { ImageContent } from '../types/images'

// Types pour les propriétés du composant
interface ZoomedGalleryProps {
  current: number
  images: ImageContent[]
  updateCurrent: (index: number | undefined) => void
}

const variants = {
  enter: (direction: number) => {
    return { x: direction > 0 ? 1000 : -1000, opacity: 0 }
  },
  center: { zIndex: 1, x: 0, opacity: 1 },
  exit: (direction: number) => {
    return { zIndex: 0, x: direction < 0 ? 1000 : -1000, opacity: 0 }
  },
}

const SWIPE_CONFIDENCE_THRESHOLD = 10000

// @ts-ignore
const MotionImage = motion.img<{ src: string }>

export default function ZoomedGallery({
  current,
  images,
  updateCurrent,
}: ZoomedGalleryProps): React.JSX.Element {
  const [[page, direction], setPage] = React.useState<[number, number]>([current, 0])

  const imageIndex = wrap(0, images.length, page)
  const image = images[imageIndex]?.image?.url

  const paginate = React.useCallback(
    (newDirection: number) => {
      setPage([page + newDirection, newDirection])
    },
    [page],
  )

  const prev = React.useCallback(() => {
    paginate(-1)
  }, [paginate])

  const next = React.useCallback(() => {
    paginate(1)
  }, [paginate])

  const close = React.useCallback(() => {
    updateCurrent(undefined)
  }, [updateCurrent])

  const transition = {
    x: { type: 'spring', stiffness: 300, damping: 30 },
    opacity: { duration: 0.2 },
  }

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    { offset, velocity }: { offset: { x: number }; velocity: { x: number } },
  ) => {
    const swipe = swipePower(offset.x, velocity.x)
    if (swipe < -SWIPE_CONFIDENCE_THRESHOLD) {
      next()
    } else if (swipe > SWIPE_CONFIDENCE_THRESHOLD) {
      prev()
    }
  }

  const handleKeyDown = React.useCallback(
    (e: KeyboardEvent) => {
      if (e.code === 'Escape') close()
      if (e.code === 'ArrowLeft') prev()
      if (e.code === 'ArrowRight') next()
    },
    [close, next, prev],
  )

  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])

  return createPortal(
    <div className="zoomed-gallery">
      <AnimatePresence initial={false} mode="popLayout" custom={direction}>
        {/* @ts-ignore */}
        <MotionImage
          key={page}
          src={image}
          className="zoomed-gallery__image"
          draggable="false"
          width={1400}
          height={650}
          custom={direction}
          initial="enter"
          animate="center"
          exit="exit"
          transition={transition}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={handleDragEnd}
          variants={variants}
          alt=""
        />
      </AnimatePresence>
      <button className="zoomed-gallery__close" onClick={close}>
        <FaTimes />
      </button>
      <div className="zoomed-gallery__counter">
        {imageIndex + 1} / {images.length}
      </div>
      <div className="zoomed-gallery__controls">
        <button className="zoomed-gallery__control" onClick={prev}>
          <FaArrowLeft />
        </button>
        <button className="zoomed-gallery__control" onClick={next}>
          <FaArrowRight />
        </button>
      </div>
    </div>,
    document.body,
  )
}

// Helper function pour calculer la puissance du swipe
function swipePower(offset: number, velocity: number): number {
  return Math.abs(offset) * velocity
}

// Helper function pour gérer l'index de l'image
function wrap(min: number, max: number, v: number): number {
  const rangeSize = max - min
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min
}
