'use client'

import { FormEvent, useState } from 'react'
import toast from 'react-hot-toast'
import { FaSpinner } from 'react-icons/fa'
import { sendEmail } from '../services/send-email'

export default function Form() {
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    setLoading(true)
    try {
      await sendEmail(formData)
      toast.success('Votre message a été bien été envoyé')
      form.reset()
      setLoading(false)
    } catch (e) {
      // @ts-ignore
      toast.error(e?.message)
      setLoading(false)
    }
  }

  const Button = () => (
    <button className="form__button" type="submit" data-loading={loading} disabled={loading}>
      <FaSpinner className="form__spinner" />
      <span>Envoyer</span>
    </button>
  )

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form__row">
        <label htmlFor="object">Objet</label>
        <input type="text" name="object" placeholder="" required />
      </div>
      <div className="form__cols">
        <div className="form__row">
          <label htmlFor="firstname">Prénom</label>
          <input type="text" name="firstname" placeholder="" required />
        </div>
        <div className="form__row">
          <label htmlFor="name">Nom de famille</label>
          <input type="text" name="name" placeholder="" required />
        </div>
      </div>
      <div className="form__cols">
        <div className="form__row">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            name="email"
            placeholder=""
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          />
        </div>
        <div className="form__row">
          <label htmlFor="phone">Téléphone</label>
          <input
            type="text"
            name="phone"
            placeholder=""
            required
            pattern="^(\+33|0)[1-9](\d{2}){4}$"
          />
        </div>
      </div>
      <div className="form__row">
        <label htmlFor="message">Message</label>
        <textarea name="message" placeholder="" required />
      </div>
      <Button />
    </form>
  )
}
