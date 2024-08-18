import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'
import { IntroductionContent, RichTextContent } from '@/types/rich-text'
import { ImageContent } from '@/types/images'
import Gallery from '@/components/gallery'
import Introduction from './components/introduction'
import ContactButton from '@/components/contact-button'

const Page = async () => {
  const payload = await getPayloadHMR({ config: configPromise })

  const [introductionData, imagesData] = await Promise.all([
    payload.find({
      collection: 'introduction',
    }),
    payload.find({
      collection: 'images',
      sort: 'position',
    }),
  ])

  const introduction = introductionData?.docs[0] as IntroductionContent

  const images = imagesData?.docs as ImageContent[]

  return (
    <main className="index">
      <Introduction introduction={introduction} />
      <h1 className="title">Découvrir mes créations !</h1>
      <Gallery images={images} />
      <ContactButton />
    </main>
  )
}

export default Page
