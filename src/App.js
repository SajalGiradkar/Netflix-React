/* 
  Author: Sajal H. Giradkar,
  projectName: Netflix Front-end Clone using react js,
  GithubAccount: https://github.com/SajalGiradkar
*/
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './Components/LandingPage';
import Netflix from './Components/Netflix';
import Error from './Components/Error';
import Account from './Components/Account';
import SignIn from './Components/SignIn';
import WhoWatching from './Components/WhoWatching';
import TvShows from './Components/TvShows';
import Navbar from './Components/Navbar';
import Features from './Components/Features';

function App() {

  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/netflix-shows' element={<Navbar />} >
          <Route index element={<Netflix />} />
          <Route path='tv-shows' element={<TvShows />} />
        </Route>
        <Route path='/features' element={<Features />} />
        <Route path='/netflix/manage-profile' element={<WhoWatching />} />
        <Route path='/netflix/account' element={<Account />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
