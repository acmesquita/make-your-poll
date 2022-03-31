export type Poll = {
  id: string
  title: string
  description: string
  date: string
  options: Option[]
}

export type Option = {
  id: string
  description: string
  answers: number
}
