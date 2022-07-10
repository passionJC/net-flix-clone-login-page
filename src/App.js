import React from 'react';
import NavBar from './NavBar';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import TVShowsPage from './pages/TVShowsPage';
import NewAndPopular from './pages/NewAndPopularPage';
import MoviesPage from './pages/MoviesPage';
import DiscoverPage from './pages/DiscoverPage';
import { Routes, Route, useLocation } from 'react-router-dom';

const App = () => {

  const { pathname } = useLocation();

  return (
    <div>
      {pathname !== '/net-flix-clone-login-page/' && <NavBar />}
      <Routes>
        <Route path='/net-flix-clone-login-page' element={<LoginPage />} />
        <Route path='/home-page' element={<HomePage />} />
        <Route path='/tv-shows-page' element={<TVShowsPage />} />
        <Route path='/movies-page' element={<MoviesPage />} />
        <Route path='/new-and-popular-page' element={<NewAndPopular />} />
        <Route path='/discover-page' element={<DiscoverPage />} />
      </Routes>
    </div>
  )
};


export default App;

