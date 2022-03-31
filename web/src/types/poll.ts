export type Poll = {
  id: string
  title: string
  description: string
  date: string
  options: {
    id: string
    description: string
    answers: number
  }[]
}
