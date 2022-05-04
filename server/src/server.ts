import { prisma } from './prisma';
import nodemailer from 'nodemailer';
import express from "express"

const app = express();

app.use(express.json())

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "b2ecddc5b7104c",
    pass: "16341cae7c0769"
  }
});

app.post("/feedbacks", async (req, res) => {
  const { type, comment, screenshot } = req.body

  const feedback = await prisma.feedback.create({
    data: {
      type,
      comment,
      screenshot
    }
  })

  await transport.sendMail({
    from: 'Equipe Feedget <oi@feedget.com>',
    to: 'Vitória Souza <viihsouza161@gmail.com>',
    subject: 'Novo Feedback',
    html: [
      `<div style="font-family: sans-serif; font-size: 16px; color: "#111">`,
      `<p><strong>Tipo:</strong> ${type}</p>`,
      `<p><strong>Comentário:</strong> ${comment}</p>`,
      `</div>`
    ].join('\n')
  })

  return res.status(201).json({ data: feedback })
})

app.listen(3333, () => {
  console.log("HTTP server running!")
})