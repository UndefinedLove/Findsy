import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Switch } from 'react-router-dom';


import Home from './screens/Home';
import SignIn from './components/Authentication/SignIn.jsx';
import SignUp from './components/Authentication/SignUp.jsx';
import Profile from './ProfileSection/Profile.jsx';
import ProfDetails from './ProfileSection/ProfDetails.jsx';
// import AuthDetails from './components/Authentication/AuthDetails';
// import Home from './screens/'
// import AuthDetails from './components/Authentication/AuthDetails';

function App() {
  return (
    <Router>

     <Routes>
     
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/" element={<SignUp/>} />
       <Route path='/profD' element={<ProfDetails/>}/>

        <Route path="/profile" element={<Profile/>}/>
        
      
     </Routes>
      

         
    </Router>
  );
}

export default App;
