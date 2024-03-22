import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('black')

  return (
    <>
      <div className="h-screen w-full flex justify-center items-end " style={{background:color  }}>
        <div className='h-12 px-3 flex mb-4 items-center bg-slate-300 rounded-lg'>
          <button className='rounded-lg text-xl font-bold capitalize px-3 mx-3 shadow-lg' style={{ background: "red" }} onClick={()=>setColor("red")}>red</button>
          <button className='rounded-lg text-xl font-bold capitalize px-3 mx-3 shadow-lg' style={{ background: "green" }} onClick={()=>setColor("green")}>green</button>
          <button className='rounded-lg text-xl font-bold capitalize px-3 mx-3 shadow-lg' style={{ background: "blue" }} onClick={()=>setColor("blue")}>blue</button>
          <button className='rounded-lg text-xl font-bold capitalize px-3 mx-3 shadow-lg' style={{ background: "orange" }} onClick={()=>setColor("orange")}>orange</button>
          <button className='rounded-lg text-xl font-bold capitalize px-3 mx-3 shadow-lg' style={{ background: "gray" }} onClick={()=>setColor("gray")}>gray</button>
          <button className='rounded-lg text-xl font-bold capitalize px-3 mx-3 shadow-lg' style={{ background: "pink" }} onClick={()=>setColor("pink")}>pink</button>
          <button className='rounded-lg text-xl font-bold capitalize px-3 mx-3 shadow-lg' style={{ background: "tomato" }} onClick={()=>setColor("tomato")}>tomato</button>
          <button className='rounded-lg text-xl font-bold capitalize px-3 mx-3 shadow-lg' style={{ background: "violet" }} onClick={()=>setColor("violet")}>violet</button>
        </div>
      </div>

    </>
  )
}

export default App
