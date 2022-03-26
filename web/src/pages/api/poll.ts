import type { NextApiRequest, NextApiResponse } from 'next'

type BodyData = {
  title: string
  description: string
  options: [{
    description: string
  }]
}

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const bodyData: BodyData = JSON.parse(req.body)
  const headers = new Headers();
  headers.append('content-type', 'application/json')

  const response = await (await fetch('http://localhost:3000/api/v1/poll', {
    method: 'POST',
    headers,
    body: JSON.stringify(bodyData)
  })).json()

  if (response.errors) {
    res.status(400).json(response)
  }

  res.status(200).json(response)
}
