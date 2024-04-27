import { getAuth } from 'firebase/auth'
import React from 'react'
import { app } from '../firebase'
import { Link } from 'react-router-dom';


const Home = () => {
  const currentUser = getAuth(app).currentUser;
  const uid = currentUser ? currentUser.uid : null;

  return (
    <>

      <div>{uid}</div>
      <Link to={'/profD'}>Click here</Link>
    </>
  )
}

export default Home