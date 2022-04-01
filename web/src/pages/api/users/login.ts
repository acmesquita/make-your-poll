import type { NextApiRequest, NextApiResponse } from 'next'
import { apiUser } from '../../../services/utils/api'

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const data = req.body
  try {
    const response = await apiUser.post('/users/sign_in', data)
    res.json({
      token: response.headers["authorization"],
      username: response.data["username"]
    })
  } catch (error) {
    res.status(500).json({ error })
  }

}
