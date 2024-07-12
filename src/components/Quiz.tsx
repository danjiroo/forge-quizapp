import React, { useEffect } from 'react'

import { ForgeLogo } from '@/global/'
import { Questions } from '@/components'
import { useAppDispatch, useAppSelector } from '@/store'
import { handleFetchQuestions } from '@/store/quiz/actions'

const Quiz: React.FC = () => {
  const dispatch = useAppDispatch()
  const {
    limit = 10,
    tags = 'JavaScript',
    questions,
  } = useAppSelector(({ quizReducer }) => quizReducer)

  useEffect(() => {
    if (questions?.length > 0) return

    dispatch(() =>
      handleFetchQuestions(dispatch, {
        limit,
        tags,
      })
    )
  }, [questions])

  return (
    <div className='bg-@forge-gray bg-@question-vector bg-cover bg-no-repeat h-svh p-8'>
      <div className='wrapper h-full relative'>
        <div className='absolute top-8 right-8'>
          <ForgeLogo color='#959ea6' width={156} height={48} />
        </div>
        <Questions />
      </div>
    </div>
  )
}

export default Quiz
