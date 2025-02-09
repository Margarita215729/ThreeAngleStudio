import nodemailer from "nodemailer"

type EmailData = {
  to: string
  subject: string
  text: string
}

export async function sendEmail({ to, subject, text }: EmailData) {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number.parseInt(process.env.EMAIL_PORT || "587"),
    secure: process.env.EMAIL_SECURE === "true",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to,
    subject,
    text,
  })
}

