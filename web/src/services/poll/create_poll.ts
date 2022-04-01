import { api } from "../utils/api"

type BodyData = {
  title: string
  description: string
  options: [{
    description: string
  }]
}

export const createPoll = async (body: BodyData, token: string) => {

  const response = await api.post('/poll', JSON.stringify({ poll: body }), {
    headers: {
      'Authorization': token,
    }
  })
  return response.data
}
