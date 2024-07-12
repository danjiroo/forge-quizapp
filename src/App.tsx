import { Home, Quiz, Results } from '@/components/'

import { useAppSelector } from '@/store'

const App: React.FC = () => {
  const quizReducer = useAppSelector(({ quizReducer }) => quizReducer)

  if (quizReducer.currentPage === 'quiz') return <Quiz />
  if (quizReducer.currentPage === 'results') return <Results />

  return <Home />
}

export default App
