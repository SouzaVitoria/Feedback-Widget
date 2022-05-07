import { MailAdapter } from './../adapters/mail-adapter';
import { FeedbacksRepository } from "../repositories/feedbacks-repository";

interface SubmitFeedbackServiceRequest {
  type: string
  comment: string
  screenshot?: string
}

export class SubmitFeedbackService {
  constructor(
    private feedbacksRepository: FeedbacksRepository,
    private mailAdapter: MailAdapter
  ) { }

  async execute(request: SubmitFeedbackServiceRequest) {
    const { type, comment, screenshot } = request;

    if (!type || !comment) {
      throw new Error('Type is required.')
    }

    if (screenshot && !screenshot.startsWith('data:image/png;base64')) {
      throw new Error('Invalid screenshot format.')
    }

    await this.feedbacksRepository.create({ type, comment, screenshot })
    await this.mailAdapter.sendMail({
      subject: 'Novo Feedback',
      body: [
        `<div style="font-family: sans-serif; font-size: 16px; color: "#111">`,
        `<p><strong>Tipo:</strong> ${type}</p>`,
        `<p><strong>Comentário:</strong> ${comment}</p>`,
        screenshot ? `<img src="${screenshot}" style="max-width: 1024px"/>` : null,
        `</div>`
      ].join('\n')
    })
  }
}