import React from 'react';
import './App.css'; // Import the CSS file
import { BrowserRouter as Router, Route, Routes , Link, Navigate} from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Home1 from './Home1';
import About from './About';
import { useUser } from './UserContext';
import Profile from './Profile';
//import  { useState } from 'react';



function App() {
  const { currentUser } = useUser();
 
  

  return (
   
    
    <Router>
      <div className="App">
        <header className="App-header">
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 100 100" stroke='white'  strokeWidth="5">
          <rect x="10" y="10" width="70" height="70" rx="10" ry="10" fill="black" />
          <path d="M20 45l15 15l40-40" fill="none" stroke="white" strokeWidth="15" />
        </svg>
          <nav>
          
            <ul className="nav-list">
              <li>
                <Link to="/Home1">Home</Link>
              </li>
              <li>
                <Link to="/About">About</Link>
              </li>
              <li>
                <Link to="/profile">Profile </Link>
              </li>
              
            
            </ul>
          </nav>
        </header>
        <main>
        <Routes>
          
          <Route exact path='/'  element = {currentUser != null ? (<Home />) : (<Navigate to="/Login" />)}/>
          <Route path  = 'Home1' element = {<Home1/>}/>
          <Route path='/Home' element ={<Home currentUser={currentUser}/>} />
          <Route path = '/About' element = {<About/>} />
          <Route path = '/Profile' element = {<Profile/>}/>
          <Route path="/Login" element={<Login/>} />
          
        </Routes>
      
        </main>
        <footer className="App-footer">
          <p>&copy; {new Date().getFullYear()} ToDo</p> 
        </footer>
      </div>
    </Router>
  
  );
}

export default App;