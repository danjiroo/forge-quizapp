import { createSlice } from '@reduxjs/toolkit'

import { IQuizState, INavigateToPage, INavigateToQuestion } from './types'

const initialState: IQuizState = {
  currentPage: 'home',
  currentQuestionIndex: 0,
  questions: [],
  score: 0,
  limit: 10,
  tags: 'JavaScript',
  isFetchingQuestions: false,
}

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    updateIsFetchingQuestions: (state, action) => {
      return {
        ...state,
        isFetchingQuestions: action.payload,
      }
    },
    updateScore: (state, action) => {
      return {
        ...state,
        score: action.payload,
      }
    },
    navigateToQuestion: (state, action: INavigateToQuestion) => {
      return {
        ...state,
        currentQuestionIndex: action.payload,
      }
    },
    navigateToPage: (state, action: INavigateToPage) => {
      return {
        ...state,
        currentPage: action.payload,
      }
    },
    saveQuestions: (state, action) => {
      return {
        ...state,
        questions: action.payload,
      }
    },
    saveSelectedAnswerToQuestion: (state, action) => {
      const { answerLetter, currentQuestionIndex } = action.payload

      const questions = state?.questions
      const updatedQuestions =
        questions?.length > 0
          ? questions.map((question, index) =>
              index === currentQuestionIndex
                ? { ...question, selectedAnswer: answerLetter }
                : question
            )
          : []

      return {
        ...state,
        questions: updatedQuestions,
      }
    },
    resetQuizState: () => initialState,
  },
})

export const quizReducer = quizSlice.reducer

export const quizActions = quizSlice.actions
