import type { NextApiRequest, NextApiResponse } from 'next'
import { updatePoll } from '../../../services/poll/update_poll'

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const { token } = req.cookies
  const data = req.body
  const pollId = req.query.id as string

  try {
    const response = await updatePoll(pollId, data, token)
    res.json(response)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error })
  }
}
