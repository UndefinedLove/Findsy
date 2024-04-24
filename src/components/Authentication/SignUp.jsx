import React, { useState } from 'react'
import {auth} from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {Link, useHistory, useNavigate} from 'react-router-dom'


const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword]  = useState('')
    // const history = useHistory();
    const navigate = useNavigate();
  
    const signUp = (e)=>{

        e.preventDefault();
        createUserWithEmailAndPassword(auth, email,password)
        .then((userCredential)=>{
         console.log(userCredential)
         //redirect to signin page after successful sign up
         navigate('/signin');
        }).catch((error)=>{
         console.log(error);
        })
     }
  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className='max-w-md w-full space-y-8'>
      <div className='min-h'>
    <form className='space-y-6' onSubmit={signUp}>
  <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>Create Account</h2>
  <input type="email" placeholder='Enter your email'
   value={email} 
   onChange={(e)=>setEmail(e.target.value)}
   >
   </input>
  <input type="password"
   placeholder='Enter your password' 
   value={password}
   onChange={(e)=>setPassword(e.target.value)} 
   >
   </input>
   <button type='submit'
   className='w-full flex justify-center py-2 px-4 border-transparent rounded-md shadow-sm text-sm 
    font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
   >Sign Up</button>
 </form>
  <div className='text-center'>
    <Link to='/signin'
    className="font-medium text-indigo-600 hover:text-indigo-500"
    >Already have an account? Sign In</Link>
  </div>
</div>
      </div>
    </div>
 
  )
}

export default SignUp