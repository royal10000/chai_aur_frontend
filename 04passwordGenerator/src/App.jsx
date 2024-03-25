import { useState, useCallback, useEffect, useRef } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllow, setNumberAllow] = useState(false)
  const [allowClar, setAllowChar] = useState(false)
  const [password, setPassword] = useState("password")

  // userRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(
    () => {
      let pass = "";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if (numberAllow) {
        str += "0123456789"
      }
      if (allowClar) {
        str += "!@#$%^&*"
      }

      for (let i = 1; i <= length; i++) {
        let char = Math.floor(Math.random() * str.length)
        pass += str.charAt(char)
      }

      setPassword(pass)
    },
    [length, numberAllow, allowClar]

  )

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllow, allowClar, passwordGenerator])


  const handleCopy = useCallback(() => {
    passwordRef.current.select();
    // passwordRef.current?.setSelectionRange(0,4)
      window.navigator.clipboard.writeText(password)
      // passwordRef.current.select();
      // document.execCommand('copy')
    
  }, [password])

  // handleCopy()
  
  
  return (
    <>
      <div className='w-fll max-w-md mx-auto px-4 py-3 shadow-md rounded-lg my-8 text-orange-500 bg-gray-500'>
        <h1 className='text-2xl text-center my-3 text-white font-semibold'> Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={password} className='outline-none w-full py-1 px-3 text-gray-500' ref={passwordRef} placeholder='Password' readOnly />
          <button className='outline-none bg-blue-600 px-4 text-white i' onClick={handleCopy}>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1 '>
            <input type="range" min={5} max={20} onChange={(e) => {
              setLength(e.target.value)
            }} value={length} className='cursor-pointer ' />
            <label >length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={numberAllow} id='numberInput' onChange={(e) => {
              setNumberAllow((prev) => !prev)
            }} />
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={allowClar} id='charInput' onChange={(e) => {
              setAllowChar((prev) => !prev)
            }} />
            <label htmlFor='charInput'>Characters</label>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
