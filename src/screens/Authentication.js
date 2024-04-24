import React from 'react'
import { Outlet } from 'react-router-dom';


function Authentication() {
  return (
    <div>
        {/* This outlet will have 2 child screens, Signup, and Signin */}
        <Outlet/> 
    </div>
  )
}

export default Authentication