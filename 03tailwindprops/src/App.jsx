import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Card } from './Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="flex rounded-sm text-black bg-white" >Tailwind Test</h1>
      <Card name="thaman" desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?" btnText="click me"/>
      <Card name="hari" desc="my name is thaman rana i live in bardiya near the indian border with a pitched road" btnText='see moore'/>
      <Card name="hari" desc="my name is thaman rana i live in bardiya near the indian border with a pitched road" />
    </>
  )
}

export default App
