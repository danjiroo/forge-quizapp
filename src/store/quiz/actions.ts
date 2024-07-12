import axios from 'axios'

import { AppDispatch } from '@/store'

import { quizActions } from './reducer'
import { IHandleFetchQuestionsParams } from './types'

const QUIZ_API_URL = 'https://quizapi.io/api/v1/questions'
const QUIZ_API_KEY = '3QfYUicYU4r4B2kFOfxRLhDhMXTo74gHo8q0fMzw' // temporary

export const handleFetchQuestions = async (
  dispatch: AppDispatch,
  params: IHandleFetchQuestionsParams
) => {
  try {
    dispatch(quizActions.updateIsFetchingQuestions(true))

    const { data, status } = await axios.get(QUIZ_API_URL, {
      headers: {
        'X-Api-Key': QUIZ_API_KEY,
      },
      params,
    })

    if (status === 200) {
      dispatch(quizActions.updateIsFetchingQuestions(false))
      dispatch(quizActions.saveQuestions(data))
    }
  } catch (error) {
    dispatch(quizActions.updateIsFetchingQuestions(false))
    console.error('[Error]: Fetching quiz questions', error)

    throw error
  }
}
