import type { NextApiRequest, NextApiResponse } from 'next'
import { createPoll } from '../../../services/poll/create_poll'

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const { token } = req.cookies
  const data = req.body
  const response = await createPoll(data, token)
  res.json(response)
}
