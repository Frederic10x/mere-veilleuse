import { JSX } from 'react'
type NodeType = 'paragraph' | 'text' | 'heading' | 'list' | 'listitem' | 'quote' | 'link'
type ListType = 'bullet' | 'number' | 'check'

export interface Node {
  type: NodeType
  format?: number | string
  text?: string
  children?: Node[]
  tag?: keyof JSX.IntrinsicElements
  listType?: ListType
  checked?: boolean
  fields?: {
    linkType?: string
    url?: string
    newTab?: boolean
  }
  [key: string]: any
}

export type RichTextContent = {
  root: {
    children?: Node[]
    direction?: 'ltr' | 'rtl' | null
    format?: '' | 'left' | 'start' | 'center' | 'right' | 'end' | 'justify'
    indent?: number
    version?: number
  }
}

export type ImageContent = {
  id: number
  alt: string
  prefix: string
  updatedAt: string
  createdAt: string
  url: string
  thumbnailURL: string | null
  filename: string
  mimeType: string
  filesize: number
  width: number
  height: number
  focalX: number
  focalY: number
}

export type IntroductionContent = {
  id: number
  titre: string
  contenu: RichTextContent
  image: ImageContent
  updatedAt: string
  createdAt: string
}
