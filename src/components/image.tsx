'use client'
import * as React from 'react'
import NextImage, { ImageProps } from 'next/image'

export default function Image(props: ImageProps) {
  const [loading, setLoading] = React.useState(true)

  const classes = `image ${props.className}`

  const onImageLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setLoading(false)
    props?.onLoad?.(e)
  }

  return (
    <NextImage
      // @ts-ignore
      alt=""
      {...props}
      className={classes}
      data-loaded={!loading}
      onLoad={onImageLoad}
    />
  )
}
