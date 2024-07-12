import React from 'react'

import { useAppSelector } from '@/store'

export interface IQuestionProps {
  answerLetter: string
  value: string
  handleOptionChange: (answerLetter: string) => void
}

const Question: React.FC<IQuestionProps> = ({
  answerLetter,
  value,
  handleOptionChange,
}) => {
  const { questions, currentQuestionIndex } = useAppSelector(
    ({ quizReducer }) => quizReducer
  )

  const label = answerLetter.toLowerCase().replace('answer_', '')

  const currentQuestion = questions[currentQuestionIndex]

  return (
    <li
      className={`outline outline-2 outline-@forge-purple p-3 pl-[40px] mb-3 flex items-center gap-7 hover:cursor-pointer hover:bg-@forge-purple transition-all group ${currentQuestion?.selectedAnswer === label ? 'bg-@forge-purple' : ''}`}
      onClick={() => handleOptionChange(label)}
    >
      <span
        className={`font-@bebas-neue flex items-center justify-center w-12 h-12 bg-@forge-purple text-white rounded-full text-3xl uppercase group-hover:border-2 group-hover:border-white ${currentQuestion?.selectedAnswer === label ? 'border-2 border-white' : ''}`}
      >
        {label}
      </span>
      <span
        className={`font-@sora text-@forge-purple text-2xl group-hover:text-white ${currentQuestion?.selectedAnswer === label ? 'text-white' : ''}`}
      >
        {value}
      </span>
    </li>
  )
}

export default Question
