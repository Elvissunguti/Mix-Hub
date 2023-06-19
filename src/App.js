import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import SignIn from './Components/Sign in/SignIn';
import Register from './Components/Register/Register';
import LoggedInHomeComponent from "./Components/Home/LoggedInHome";
import Feed from './Components/Feed/Feed';
import Library from './Components/Library/Library';
import Footer from './Components/Footer/Footer';
import { useCookies } from 'react-cookie';
import songContext from './Components/Contexts/songContext';
import Search from './Components/SearchPage/SearchPage';
import MyMusic from './Components/MyMusic/MyMusic';

function App() {

  const [ cookie, setCookie ] = useCookies(["token"]);
  const [ currentSong, setCurrentSong ] = useState(null);
  const [ isPaused, setIsPaused ] = useState(null);
  const [ soundPlayed, setSoundPlayed ] = useState(null);

  return (
    <div className="App w-screen h-screen font-poppins">
      <BrowserRouter>
      {cookie.token ? (
        // logged in routes
        <songContext.Provider
           value={{
            currentSong,
            setCurrentSong,
            soundPlayed,
            setSoundPlayed,
            isPaused,
            setIsPaused,
           }}
        >
          <Routes>
            <Route path='/' element={<HelloComponent />} />
            <Route path='/home' element={<LoggedInHomeComponent />} />
            <Route path="/" />

            <Route path='/search' element={<Search />} />
            <Route path='myMusic' element={<MyMusic />} />

            
          </Routes>

        </songContext.Provider>

      ) : (
        // logged out components
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      )}

      </BrowserRouter>

    
      
    </div>
  );
}



const HelloComponent = () => {
  return <div>This is hello from component</div>;
};

export default App;
