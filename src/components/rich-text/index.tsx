import RichTextParser from '@/components/rich-text/rich-text-parser'
import { RichTextContent } from '@/types/rich-text'

type Props = {
  content: RichTextContent
}

export default function RichText({ content }: Props) {
  return <RichTextParser className="rich-text" content={content} />
}
