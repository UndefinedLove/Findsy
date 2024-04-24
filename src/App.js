import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Authentication from './screens/Authentication';
import Signin from './components/Authentication/Signin';
import Signup from './components/Authentication/Signup';

import Home from './screens/Home';

function App() {
  return (
<<<<<<< HEAD
   <>
   Lets start the project
   lets begin
   <div className= 'text-yellow-500 bg-purple-600 h-screen'>Lets begiun</div>
   </>
=======
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} >
            {/* Inner Routes to be inserted here */}
          </Route>

          <Route path="/auth" element={<Authentication />}>
            <Route index element={<Signin />} />
            <Route path="/auth/signup" element={<Signup />} />
          </Route>

        </Routes>
      </div>
    </Router>
>>>>>>> e39c9ea1308ea6782ce1b45753f47411d8280fa1
  );
}

export default App;
