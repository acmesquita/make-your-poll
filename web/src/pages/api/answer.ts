import type { NextApiRequest, NextApiResponse } from 'next'
import { api } from '../../services/utils/api'

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const data = req.body
  await api.post('/answer', data)
  res.status(201).json({})
}
