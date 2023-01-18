import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import GlobalNavbar from './components/Layout/GlobalNavbar';
import About from './components/Main/About';
import Armory from './components/Main/Armory';
import RoundCount from './components/Main/RoundCount';

function App() {
  return (
    <>
      <GlobalNavbar />
      <main>
        <Routes>
          <Route index path="aAbout" element={<About />} />
          <Route path="/armory" element={<Armory />} />
          <Route path="/roundcount" element={<RoundCount />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
