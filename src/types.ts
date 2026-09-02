export type Topic = 'SN1' | 'SN2' | 'E1' | 'E2'

export interface Question {
  id: number
  topic: Topic
  prompt: string
  choices: string[]
  correctIndex: number
  explanation: string
  reactionScheme?: ReactionScheme
}

export type ReactionScheme =
  | { kind: 'bromoethane-iodide'; conditions: string }
  | { kind: 'tertbutyl-water'; conditions: string }
  | { kind: 'secbutyl-bulky-base'; conditions: string }
  | { kind: 'tertbutyl-heat'; conditions: string }
  | { kind: 'secbutyl-ethoxide'; conditions: string }

export interface Attempt {
  questionId: number
  selectedIndex: number
}
