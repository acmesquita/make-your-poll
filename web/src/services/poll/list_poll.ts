import { apiQuery as api } from "../utils/api"

export const listPoll = async () => {
  const response = await api.get('/poll')
  return response.data
}
