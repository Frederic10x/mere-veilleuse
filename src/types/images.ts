export interface Image {
  id: number
  alt: string
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

export type ImageContent = {
  id: number
  nom: string
  image: Image
  orientation: 'normal' | 'two-rows' | 'two-cols'
  position: number
  updatedAt: string
  createdAt: string
}
