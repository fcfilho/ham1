import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import App from './App';
import Home from './components/Home';   
import Associados from './components/Associados';
import Contato from './components/Contato';
import Atuacao from './components/Atuacao';
import Sobre from './components/Sobre';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="Associados" element={<Associados />} />
        <Route path="Atuacao" element={<Atuacao />} />
        <Route path="Contato" element={<Contato />} />
        <Route path="Sobre" element={<Sobre />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();

