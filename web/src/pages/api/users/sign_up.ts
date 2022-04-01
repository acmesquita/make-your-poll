import type { NextApiRequest, NextApiResponse } from 'next'
import { apiUser } from '../../../services/utils/api'

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  try {
    const data = req.body
    await apiUser.post('/users', data)
    res.json({})
  } catch (error) {
    res.status(500).json({ error })
  }

}
