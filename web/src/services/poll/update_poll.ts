import { apiMutation as api } from "../utils/api"

type BodyData = {
  title: string
  description: string
  options: [{
    id: string
    description: string
  }]
}

export const updatePoll = async (id: string, body: BodyData) => {
  try {
    const response = await api.patch(`/poll/${id}`, { poll: { ...body } })
    return response.data
  } catch (error) {
    console.error(error)
    return { status: 400, errors: 'Error' }
  }
}
