import React from 'react'

import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'

const Page = async () => {
  const payload = await getPayloadHMR({ config: configPromise })

  const { docs } = await payload.find({
    collection: 'introduction',
  })

  const homeDoc = docs[0]
  const homeContent = homeDoc.contenu
  const blocs = homeContent[0].children
  const introduction = blocs[0].text

  return <div style={{ color: 'black' }} dangerouslySetInnerHTML={{ __html: introduction }}></div>
}

export default Page
