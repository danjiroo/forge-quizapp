import React, { useEffect, useState } from 'react'

import { useAppSelector, useAppDispatch } from '@/store'
import { Spinner } from '@/global'
import { Question } from '@/components'
import { quizActions } from '@/store/actions'

const Questions: React.FC = () => {
  const dispatch = useAppDispatch()
  const {
    isFetchingQuestions,
    limit = 10,
    currentQuestionIndex = 0,
    score = 0,
    questions,
  } = useAppSelector(({ quizReducer }) => quizReducer)

  if (isFetchingQuestions) return <Spinner />

  if (!questions || questions.length < 1) return <>No questions found</>

  const handleOptionChange = (answerLetter: string) => {
    dispatch(
      quizActions.saveSelectedAnswerToQuestion({
        answerLetter,
        currentQuestionIndex,
      })
    )
  }

  const currentQuestion = questions[currentQuestionIndex]

  const handleNextQuestion = () => {
    if (currentQuestion?.selectedAnswer) {
      const correctAnswerKey = `answer_${currentQuestion?.selectedAnswer}_correct`

      if (currentQuestion.correct_answers[correctAnswerKey] === 'true') {
        dispatch(quizActions.updateScore(score + 1))
      }
    }

    if (currentQuestionIndex === limit - 1) {
      dispatch(quizActions.navigateToPage('results'))
      dispatch(quizActions.navigateToQuestion(0))
      dispatch(quizActions.saveQuestions([]))
      return
    }

    dispatch(quizActions.navigateToQuestion(currentQuestionIndex + 1))
  }

  const answersEntries = Object.entries(
    questions[currentQuestionIndex]?.answers
  )

  const mappedAnswers =
    answersEntries?.length > 0
      ? answersEntries
          ?.filter(([, value]) => value !== null)
          .map(([key, value]) => {
            return (
              <Question
                key={key}
                answerLetter={key}
                value={value}
                handleOptionChange={handleOptionChange}
              />
            )
          })
      : null

  const disableNextButton = !currentQuestion?.selectedAnswer

  // on key press - not finished
  // useEffect(() => {
  //   const handleKeyPress = (event: KeyboardEvent) => {
  //     const eventKey = event.key.toLowerCase()
  //     const option =
  //       answersEntries?.length > 0
  //         ? answersEntries.find(
  //             ([key, value]) =>
  //               key.toLowerCase().replace('answer_', '') === eventKey
  //           )
  //         : {}

  //     if (!option) return

  //     handleOptionChange(eventKey)
  //   }

  //   window.addEventListener('keydown', handleKeyPress)
  //   return () => {
  //     window.removeEventListener('keydown', handleKeyPress)
  //   }
  // }, [currentQuestionIndex, questions])

  return (
    <div className='h-full p-12'>
      <div className='w-[856px] m-auto'>
        <h3 className='my-4 font-@bebas-neue text-[96px] text-@forge-purple leading-[115.2px]'>
          Question {currentQuestionIndex + 1}/{limit}
        </h3>

        <p className='mb-10 font-@sora text-4xl text-@forge-purple leading-[45.36px]'>
          {questions[currentQuestionIndex]?.question ?? ''}
        </p>

        <ul className='h-[310px] overflow-auto mb-10 p-2 w-[700px] m-auto'>
          {mappedAnswers}
        </ul>
        <button
          className={`bg-[#d4e0e9] text-[#b2bcc3] py-3 px-6 mt-6 m-auto flex items-center space-x-2 font-@sora text-[30px] leading-[37.8px] hover:bg-@forge-purple hover:text-white transition-all ${disableNextButton ? 'hover:bg-[#d4e0e9] hover:text-[#b2bcc3]' : ''}`}
          onClick={handleNextQuestion}
          disabled={disableNextButton}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Questions
