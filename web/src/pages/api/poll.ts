import type { NextApiRequest, NextApiResponse } from 'next'
import { createPoll } from '../../services/poll/create_poll'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const data = await createPoll(JSON.parse(req.body))

    if (data.errors) {
      res.status(400).json(data)
    }

    res.status(200).json(data)
  } catch (error) {
    res.status(400).json({error: error})
  }

}
