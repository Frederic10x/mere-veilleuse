import Link from 'next/link'
import { MdMail } from 'react-icons/md'

export default async function ContactButton() {
  return (
    <Link href="/contact" className="contact-button">
      <span>Me contacter</span>
      <MdMail />
    </Link>
  )
}
