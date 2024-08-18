'use client'
import { useEffect, useState } from 'react'
import RichText from '../../../components/rich-text'
import Collapsible from '../../../components/collapsible'
import Image from '../../../components/image'
import { RichTextContent } from '../../../types/rich-text'

type Props = {
  introduction: RichTextContent
  tracyImage: any
}

export default function Introduction({ introduction, tracyImage }: Props) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="presentation">
      <Collapsible height={isMobile ? 175 : 300}>
        <RichText content={introduction} />
      </Collapsible>
      <div className="presentation__image">
        <Image src={tracyImage?.url || ''} fill alt={tracyImage?.alt} />
      </div>
    </div>
  )
}
