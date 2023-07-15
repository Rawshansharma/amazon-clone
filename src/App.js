import './App.css';
import React,{useState,useEffect} from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
 import Header from './components/Header';
import {auth} from './firebase'

function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);
  return (
    <div className="bg-gray-100">
       <Router>
      <div>
        <section>                              
            <Routes>        
              <Route path='/' element={<Header name={userName}/>}/>                                                         
                <Route path="/signup" element={<Signup/>}/>
               <Route path="/login" element={<Login/>}/>
            </Routes>                    
        </section>
      </div>
    </Router>

    </div>
  );
}

export default App;
