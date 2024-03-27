import React from 'react'
import { useContext } from 'react'
import { UserContext } from '../Context/UserContext'

const Profile = () => {
  const { user } = useContext(UserContext)
  if (!user) {
    return <>
      <h2>please login</h2>
    </>
  }
  return (
    <>
      <div>Welcom {user.username}</div>
    </>
  )
}

export default Profile