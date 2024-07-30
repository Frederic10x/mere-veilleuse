import { nodemailerAdapter } from '@payloadcms/email-nodemailer'

export const emailConfig = nodemailerAdapter({
  defaultFromAddress: 'fred.69780@hotmail.fr',
  defaultFromName: 'Tracy Ferreira',
  // Nodemailer transportOptions
  transportOptions: {
    host: process.env.SMTP_HOST,
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  },
})
