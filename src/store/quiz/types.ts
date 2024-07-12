export interface IQuestion {
  id: number
  question: string
  description: string
  answers: Record<string, string>
  multiple_correct_answers: string | boolean
  correct_answers: Record<string, string>
  explanation: string
  tip: string | null
  tags: string[] | string
  category: string
  difficulty: string
  selectedAnswer: string
}

export type IPages = 'home' | 'quiz' | 'results'

export interface IQuizState {
  currentPage: IPages
  currentQuestionIndex: number
  questions: IQuestion[]
  score: number
  limit: number
  tags?: string[] | string
  isFetchingQuestions: boolean
}

export interface INavigateToPage {
  payload: IPages
}

export interface INavigateToQuestion {
  payload: number
}

export interface IHandleFetchQuestionsParams {
  limit?: number
  tags?: string[] | string
  category?: string
}
