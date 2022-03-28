import { api } from "../utils/api"

type BodyData = {
  title: string
  description: string
  options: [{
    description: string
  }]
}

export const createPoll = async (body: BodyData) => {
  console.log("###########", JSON.stringify(body))
  const response = await api.post('/poll', JSON.stringify({poll: body}))
  return response.data
}
