import React, { useState } from 'react';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate('/signin');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className="h-screen">
      <div className="container mx-auto px-6 py-24">
        <div className="flex h-full flex-wrap items-center justify-center lg:justify-between">
          {/* Left column container with background */}
          <div className="mb-4 md:mb-0 lg:mb-0 md:w-8/12 lg:w-6/12">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="w-full"
              alt="Phone image"
            />
          </div>

          {/* Right column container with form */}
          <div className="md:w-8/12 lg:ms-6 lg:w-5/12 mb-4">
            <form onSubmit={signUp}>
            <div className= "space-y-4">
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Create Account
              </h2>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-6 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mt-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              </div>
              <button
                type="submit"
                className="w-full mt-6 py-2 px-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign Up
              </button>
            </form>
            <div className="text-center mt-4">
              <Link
                to="/signin"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Already have an account? Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;





// import React, { useState } from 'react'
// import {auth} from '../../firebase';
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import {Link, useHistory, useNavigate} from 'react-router-dom'


// const SignUp = () => {
//     const [email, setEmail] = useState('')
//     const [password, setPassword]  = useState('')
//     // const history = useHistory();
//     const navigate = useNavigate();
  
//     const signUp = (e)=>{

//         e.preventDefault();
//         createUserWithEmailAndPassword(auth, email,password)
//         .then((userCredential)=>{
//          console.log(userCredential)
//          //redirect to signin page after successful sign up
//          navigate('/signin');
//         }).catch((error)=>{
//          console.log(error);
//         })
//      }
//   return (

//     <div  className="h-screen">
//       <div  classN="container h-full px-6 py-24">
//         <div className="flex h-full flex-wrap items-center justify-center lg:justify-between">
//           {/* left column container background */}
//           <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
//           <img
//           src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
//           class="w-full"
//           alt="Phone image" />
//           <div/>
//           {/* right column container with form */}
//             <div className='md:w-8/12 lg:ms-6 lg:w-5/12'>
//               <form  onSubmit={signUp}>
//       <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>Create Account</h2>
//       <input 

//         type="email"
//        placeholder='Enter your email'
//        value={email} 
//        onChange={(e)=>setEmail(e.target.value)}
//        >
//        </input>
//       <input type="password"
//        placeholder='Enter your password' 
//        value={password}
//        onChange={(e)=>setPassword(e.target.value)} 
//        >
//        </input>
       
//        <button type='submit'
//         className='w-full flex justify-center py-2 px-4 border-transparent rounded-md shadow-sm text-sm 
//          font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
//        >Sign Up</button>
//        </form>
//           <div className='text-center'>
//            <Link to='/signin'
//            className="font-medium text-indigo-600 hover:text-indigo-500"
//            >Already have an account? Sign In</Link>
//          </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
 
//   )
// }

// export default SignUp