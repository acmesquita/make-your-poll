import { apiQuery as api } from "../utils/api"

export const listPoll = async (token: string) => {
  const response = await api.get('/poll', {
    headers: {
      'Authorization': token
    }
  })
  return response.data
}
