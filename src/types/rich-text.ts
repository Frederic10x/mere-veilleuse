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
