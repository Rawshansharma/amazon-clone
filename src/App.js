import './App.css';
import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Header from './components/Header';
 
function App() {

  return (
    <div className="bg-gray-100">
       <Router>
      <div>
        <section>                              
            <Routes>        
              <Route path='/' element={<Header/>}/>                                                         
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
