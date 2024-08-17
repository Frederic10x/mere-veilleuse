import Link from 'next/link'
import { FaHeart } from 'react-icons/fa'
import { MdMail } from 'react-icons/md'

export default async function ContactButton() {
  return (
    <Link href="/contact" className="contact-button">
      <span>Me contacter</span>
      <MdMail />
    </Link>
  )
}
