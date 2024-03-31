import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoInput from './component/TodoInput'
import TodoNote from './component/TodoNote'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-white mb-5 text-3xl font-bold tracking-lighter'>Todo with React Redux</h1>
      <TodoInput />
      <TodoNote/>
    </>
  )
}

export default App
