import React, { useState } from 'react'
import {auth} from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {Link, useHistory, useNavigate}  from 'react-router-dom';

const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword]  = useState('')
    // const history = useHistory();
    const navigate = useNavigate();

    const signIn = (e)=>{
       e.preventDefault();
       signInWithEmailAndPassword(auth, email,password)
       .then((userCredential)=>{
        console.log(userCredential)
        navigate('/home');
       }).catch((error)=>{
        console.log(error);
       })
    }
  return (
    <div>
    <form onSubmit={signIn}>
     <h1>Log In to your Account</h1>
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
      <button type='submit'>Log In</button>
    </form>
    <Link to='/signup'>Don't have an account? Sign up</Link>

 </div>
  )
}

export default SignIn