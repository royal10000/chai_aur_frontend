import { useState } from 'react'
import './App.css'
import { UserContext } from './Context/UserContext'
import { UserContextProvider } from './Context/UserContextProvider'
import Login from './Components/Login'
import Profile from './Components/Profile'


function App() {

  return (
    <UserContextProvider>
      <div className='bg-green-600 text-red-900'>React with Chai s </div>
      <Login />
      <Profile />
    </UserContextProvider>
    
  )
}

export default App
