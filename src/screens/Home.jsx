import { getAuth } from 'firebase/auth'
import React from 'react'
import { app } from '../firebase'


const Home = () => {
  return (
    <div>{ (getAuth(app).currentUser.uid)}</div>
  )
}

export default Home