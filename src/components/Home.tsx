import React from 'react'

import { ForgeLogo, RightArrow } from '@/global/'
import { useAppDispatch } from '@/store'
import { quizActions } from '@/store/actions'

const Home: React.FC = () => {
  const dispatch = useAppDispatch()

  const handleNavigateToQuizPage = () => {
    dispatch(quizActions.navigateToPage('quiz'))
  }

  return (
    <div className='bg-@forge-purple bg-@home-vector bg-cover bg-no-repeat h-svh p-8'>
      <div className='wrapper h-full'>
        <div className='h-full flex items-end justify-center flex-col'>
          <h1 className='font-@bebas-neue text-[280px] leading-[212.8px]'>
            Quizzler
          </h1>
          <div className='flex gap-4'>
            <h3 className='font-@sora text-[15px] uppercase'>By:</h3>
            <ForgeLogo />
          </div>
          <button
            className='mt-6 flex items-center space-x-2 font-@sora text-[32px] leading-[40.32px] hover:tracking-wide transition-all'
            onClick={handleNavigateToQuizPage}
          >
            <span>Let&#39;s start the quiz</span>
            <RightArrow />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
