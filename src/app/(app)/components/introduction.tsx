'use client'
import RichText from '@/components/rich-text'
import Collapsible from '@/components/collapsible'
import { useEffect, useState } from 'react'
import { IntroductionContent, RichTextContent, ImageContent } from '@/types/rich-text'

type Props = {
  introduction: IntroductionContent
}

export default function Introduction({ introduction }: Props) {
  const [isMobile, setIsMobile] = useState(false)

  const introductionRichText = (introduction?.contenu as RichTextContent) || {}
  const introductionImage = (introduction?.image as ImageContent) || {}

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
        <RichText content={introductionRichText} />
      </Collapsible>
      <div className="presentation__image">
        <img src={introductionImage?.url || ''} alt={introductionImage?.alt || ''} />
      </div>
    </div>
  )
}
