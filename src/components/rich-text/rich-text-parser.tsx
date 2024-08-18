import serializeLexicalRichText from '@/utils/serializeLexicalRichText'
import React from 'react'
import { Node } from '../../types/rich-text'

type Props = {
  className?: string
  content: {
    root: {
      children?: Node[]
    }
  }
}

export default function RichTextParser({ className, content }: Props) {
  if (!content?.root?.children) return null

  return (
    <div className={className}>
      {serializeLexicalRichText({ children: content.root.children || [] })}
    </div>
  )
}
