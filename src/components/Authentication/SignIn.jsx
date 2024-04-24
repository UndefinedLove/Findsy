import React, { useState } from 'react';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate('/home');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='gradient-form h-full bg-neutral-200 dark:bg-neutral-700'>
      <div className='container h-full p-10'>
        <div className='flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200'>
          <div className='w-full'>
            <div className='block rounded-lg bg-white shadow-lg dark:bg-neutral-800'>
              <div className='lg:flex lg:flex-wrap'>
                {/* left column container */}
                <div className='px-4 md:px-0 lg:w-6/12'>
                  <div className='md:mx-6 md:p-12'>
                    {/* logo */}
                    <div className='text-center'>
                      <img
                        src='https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp'
                        alt='logo'
                      />
                      <h2>FindNear</h2>
                    </div>
                    {/* form */}
                    <div>
                    <form onSubmit={signIn}>
                      <h1 className='mb-4 text-lg font-semibold'>Log In to your Account</h1>
                      <input
                        className='w-full mb-4 px-4 py-2 border rounded focus:outline-none focus:border-primary dark:bg-neutral-900 dark:border-neutral-600 dark:text-white'
                        type='email'
                        placeholder='Enter your email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <input
                        className='w-full mb-4 px-4 py-2 border rounded focus:outline-none focus:border-primary dark:bg-neutral-900 dark:border-neutral-600 dark:text-white'
                        type='password'
                        placeholder='Enter your password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <div className="mb-12 pb-1 pt-1 text-center">
                      <button 
                        className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-dark-3 transition duration-150 ease-in-out hover:shadow-dark-2 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:shadow-dark-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                        data-twe-ripple-init
                        data-twe-ripple-color="light"
                        style={{
                          background:
                            'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)',
                         }}
                      type='submit'
                      >Log In</button>
                      </div>
                    </form>
                    <div className='flex items-center justify-between '>
                    <Link to='/signup'
                    className='text-sm text-primary  hover:underline  hover:text-green' >
                      Don't have an account? Sign up</Link>
                    </div>
                    </div>
                  </div>
                </div>
                {/* Right column container with background and description */}
                <div className='flex items-center rounded-b-lg lg:w-6/12 lg:rounded-e-lg lg:rounded-bl-none'>
                  <div
                    className='px-4 py-6 text-white md:mx-6 md:p-12'
                    style={{
                      background:
                        'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)',
                    }}
                  >
                    <h4 className='mb-6 text-xl font-semibold'>
                      We are more than just a company
                    </h4>
                    <p className='text-sm'>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                      consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;



// import React, { useState } from 'react'
// import {auth} from '../../firebase';
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import {Link, useHistory, useNavigate}  from 'react-router-dom';

// const SignIn = () => {
//     const [email, setEmail] = useState('')
//     const [password, setPassword]  = useState('')
//     // const history = useHistory();
//     const navigate = useNavigate();

//     const signIn = (e)=>{
//        e.preventDefault();
//        signInWithEmailAndPassword(auth, email,password)
//        .then((userCredential)=>{
//         console.log(userCredential)
//         navigate('/home');
//        }).catch((error)=>{
//         console.log(error);
//        })
//     }
//   return (
//     <div className='gradient-form h-full bg-neutral-200 dark:bg-neutral-700'>
//       <div className='container h-full p-10'>
//         <div className='flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200'>
//           <div className='w-full"'>
//             <div className='block rounded-lg bg-white shadow-lg dark:bg-neutral-800'>
//               <div className='g-0 lg:flex lg:flex-wrap'>
//                 {/* left column container */}
//                 <div className='px-4 md:px-0 lg:w-6/12'>
//                   <div className='md:mx-6 md:p-12"'>
//                     {/* logo */}
//                     <div className='text-center'> 
//                     <img 
//                     src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
//                      alt="logo" />
//                      <h4>FindNear</h4>
//                     </div>
//                     {/* form */}
//                     <form onSubmit={signIn}>
//      <h1>Log In to your Account</h1>
//      <input type="email" placeholder='Enter your email'
//       value={email} 
//       onChange={(e)=>setEmail(e.target.value)}
//       >
//       </input>
//      <input type="password"
//       placeholder='Enter your password' 
//       value={password}
//       onChange={(e)=>setPassword(e.target.value)} 
//       >
//       </input>
//       <button type='submit'>Log In</button>
//     </form>
//     <Link to='/signup'>Don't have an account? Sign up</Link>
//                   </div>
//                 </div>
//                 {/* <!-- Right column container with background and description--> */}
//                 <div
//               className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-e-lg lg:rounded-bl-none"
//               style="background: linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)">
//               <div className="px-4 py-6 text-white md:mx-6 md:p-12">
//                 <h4 className="mb-6 text-xl font-semibold">
//                   We are more than just a company
//                 </h4>
//                 <p className="text-sm">
//                   Lorem ipsum dolor sit amet, consectetur adipisicing
//                   elit, sed do eiusmod tempor incididunt ut labore et
//                   dolore magna aliqua. Ut enim ad minim veniam, quis
//                   nostrud exercitation ullamco laboris nisi ut aliquip ex
//                   ea commodo consequat.
//                 </p>
//               </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* </div> */}
//     </div>
//     <div>
 

//  </div>
//   )
// }

// export default SignIn