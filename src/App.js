import './App.css';
import {
  Routes,
  Route,
  HashRouter
} from "react-router-dom";
import HomePage from './pages/home-page';
import AboutPage from './pages/about-page';
import React from 'react';
import MainLayout from './components/main-layout';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import { UserContext } from './contexts/UserContext';

function App() {
  return (
      <HashRouter>
        <Routes>
          <Route path={'/'} element={<UserContext.Provider value="Emre"><MainLayout /></UserContext.Provider>}>
            <Route path={'/'} element={<HomePage />}></Route>
            <Route path={'/about'} element={<AboutPage />}></Route>
          </Route>
        </Routes>
    </HashRouter>
  );
}

export default App;
