import { api } from "../utils/api"

export const findPoll = async (id: string) => {
  const response = await api.get(`/poll/${id}`)
  return response.data
}
