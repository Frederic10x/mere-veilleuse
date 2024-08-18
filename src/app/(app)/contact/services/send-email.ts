'use server'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'

export const sendEmail = async (formData: FormData) => {
  const payload = await getPayloadHMR({ config: configPromise })

  const object = formData.get('object') as string
  const email = formData.get('email') as string

  try {
    await payload.sendEmail({
      to: 'cardia.lima.tracy@orange.fr',
      subject: object,
      html: formatMail(formData),
      replyTo: email,
    })
  } catch (e) {
    throw new Error("Une erreur est survenue lors de l'envoi du message")
  }
}

function formatMail(formData: FormData) {
  return `
<div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; padding: 20px; border-radius: 8px; background-color: #f9f9f9;">
  <h1 style="font-size: 24px; color: #444; margin-bottom: 20px; text-align: center;">Message de ${formData.get(
    'firstname',
  )} ${formData.get('name')}</h1>
  <p style="font-size: 18px; margin-bottom: 10px;">
    <strong style="color: #555;">Email :</strong> <span style="color: #007bff;">${formData.get(
      'email',
    )}</span>
  </p>
  <p style="font-size: 18px; margin-bottom: 10px;">
    <strong style="color: #555;">Téléphone :</strong> <span style="color: #007bff;">${formData.get(
      'phone',
    )}</span>
  </p>
  <div style="font-size: 18px; margin-top: 20px; padding: 15px; background-color: #ffffff; border: 1px solid #ddd; border-radius: 8px;">
    <strong style="color: #555; display: block; margin-bottom: 10px;">Message :</strong>
    <p style="margin: 0; line-height: 1.6; white-space: pre-line; color: #333;">${formData.get(
      'message',
    )}</p>
  </div>
</div>

  `
}
