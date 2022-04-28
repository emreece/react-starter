import './App.css';
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import HomePage from './pages/home-page';
import AboutPage from './pages/about-page';
import React from 'react';
import MainLayout from './components/main-layout';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<MainLayout />}>
          <Route path={'/'} element={<HomePage />}></Route>
          <Route path={'/about'} element={<AboutPage />}></Route>
        </Route>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
