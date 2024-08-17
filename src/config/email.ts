import { nodemailerAdapter } from '@payloadcms/email-nodemailer'

export const emailConfig = nodemailerAdapter({
  defaultFromAddress: 'frederic.freelancing@gmail.com',
  defaultFromName: 'Tracy Ferreira',
  transportOptions: {
    host: process.env.SMTP_HOST,
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  },
})
