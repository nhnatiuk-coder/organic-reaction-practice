export type Topic = 'SN1' | 'SN2' | 'E1' | 'E2'

export interface Question {
  id: number
  topic: Topic
  prompt: string
  choices: string[]
  correctIndex: number
  explanation: string
}

export interface Attempt {
  questionId: number
  selectedIndex: number
}
