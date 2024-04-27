import React, { useState } from 'react';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
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
            <form onSubmit={signIn}>
            <div className= "space-y-4">
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Login Here
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
                Login
              </button>
            </form>
            <div className="text-center mt-4">
              <Link
                to="/signup"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Don't have an account? Sign up
              </Link>
            </div>
            {error && <span className='mt-4 bg-red-500'>Wrong email or password!</span>}
          </div>
        </div>
      </div>
    </section>

  );
};

export default SignIn;



