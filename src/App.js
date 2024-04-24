import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Switch } from 'react-router-dom';


import Home from './screens/Home';
import SignIn from './components/Authentication/SignIn.jsx';
import SignUp from './components/Authentication/SignUp.jsx';
import AuthDetails from './components/Authentication/AuthDetails';
// import Home from './screens/'
// import AuthDetails from './components/Authentication/AuthDetails';

function App() {
  return (
    <Router>

     <Routes>
     
        <Route path="/signin" component={<SignIn/>}/>
        <Route path="/signup" component={<SignUp/>}/>
        <Route path="/home" component={<Home/>}/>
        <Route path="/" component={SignIn} />
        
      
     </Routes>
      

         
    </Router>
  );
}

export default App;
