'use client'
import * as React from 'react'
import { ImageContent } from '@/types/images'
import ZoomedGallery from './zoomed-gallery'

export default function Gallery({ images }: { images: ImageContent[] }) {
  const [current, setCurrent] = React.useState<number | undefined>()

  const updateCurrent = (newCurrent: number | undefined) => {
    if (newCurrent !== undefined) {
      console.log('here')
      setCurrent(newCurrent)
      document.body.style.setProperty('overflow', 'hidden')
    } else {
      console.log('here!')

      setCurrent(undefined)
      document.body.style.removeProperty('overflow')
    }
  }

  const showZoomedGallery = current !== undefined

  return (
    <div className="gallery">
      {images?.map((item, i) => {
        const { id, image, orientation } = item
        const { alt, url } = image
        const classes = `gallery__image ${orientation}`
        return (
          <img key={id} src={url} alt={alt} className={classes} onClick={() => updateCurrent(i)} />
        )
      })}
      {showZoomedGallery && (
        <ZoomedGallery current={current} images={images} updateCurrent={updateCurrent} />
      )}
    </div>
  )
}
