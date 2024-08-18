import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'
// import { RichTextContent } from '@/types/rich-text'
// import { ImageContent } from '@/types/images'
// import Gallery from '@/components/gallery'
// import Introduction from './components/introduction'
import ContactButton from '../../components/contact-button'

const Page = async () => {
  const payload = await getPayloadHMR({ config: configPromise })

  // const [introductionData, imagesData, tracyImageData] = await Promise.all([
  //   payload.find({
  //     collection: 'introduction',
  //   }),
  //   payload.find({
  //     collection: 'images',
  //     sort: 'position',
  //   }),
  //   payload.find({
  //     collection: 'media',
  //     where: {
  //       alt: { equals: 'tracy' },
  //     },
  //   }),
  // ])

  // const introductionDoc = introductionData?.docs[0]
  // const introduction = introductionDoc.contenu as RichTextContent

  // const images = imagesData?.docs as ImageContent[]
  // const tracyImage = tracyImageData?.docs[0]

  return (
    <main className="index">
      {/* <Introduction introduction={introduction} tracyImage={tracyImage} /> */}
      <h1 className="title">Découvrir mes créations !</h1>
      {/* <Gallery images={images} /> */}
      <ContactButton />
    </main>
  )
}

export default Page
