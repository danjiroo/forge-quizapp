import React from 'react'

import { useAppDispatch, useAppSelector } from '@/store'
import { quizActions } from '@/store/actions'

const Results: React.FC = () => {
  const dispatch = useAppDispatch()
  const { score, limit } = useAppSelector(({ quizReducer }) => quizReducer)

  const handleNavigateToHomePage = () => {
    dispatch(quizActions.updateScore(0))
    dispatch(quizActions.navigateToPage('home'))
  }

  return (
    <div className='bg-@forge-purple bg-@results-vector bg-cover bg-no-repeat h-svh'>
      <div className='wrapper h-full'>
        <div className='flex h-full gap-5'>
          <div className='flex items-end justify-center flex-col p-10'>
            <h2 className='font-@bebas-neue sm:text-[220px] xl:text-[270px] leading-[220px]'>
              Bravo!
            </h2>
            <h3 className='font-@bebas-neue sm:text-[80px] xl:text-[100px] leading-[150px]'>
              You have scored
            </h3>
            <button
              className='mt-6 flex items-center space-x-2 font-@sora underline underline-offset-[7px] text-[32px] leading-[40.32px] hover:tracking-wide transition-all'
              onClick={handleNavigateToHomePage}
            >
              Wanna Play Again?
            </button>
          </div>
          <div className='flex flex-col justify-center bg-[#ebeff2] p-10'>
            <h2 className='mb-52 font-@bebas-neue sm:text-[220px] xl:text-[270px]  text-@forge-purple leading-[220px]'>
              {score}/{limit}
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Results
