import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Associados from './components/Associados';
import Contato from './components/Contato';
import Atuacao from './components/Atuacao';
import Sobre from './components/Sobre';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Associados" element={<Associados />} />
      <Route path="/Contato" element={<Contato/>} />
      <Route path="/Atuacao" element={<Atuacao/>} />
      <Route path="/Sobre" element={<Sobre/>} />
    </Routes>
  );

}

export default MainRoutes();
