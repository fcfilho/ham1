import './App.css';

import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from './components/Header';
import MainNav from './components/MainNav';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <MainNav />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
