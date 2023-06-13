import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import SignIn from './Components/Sign in/SignIn';
import Register from './Components/Register/Register';
import Feed from './Components/Feed/Feed';
import Library from './Components/Library/Library';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign in" element={<SignIn />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/feed' element={<Feed />} />
        <Route path='/library' element={<Library />} />
        <Route path='/footer' element={<Footer />} />
        

      </Routes>
      </BrowserRouter>

    
      
    </div>
  );
}

export default App;
