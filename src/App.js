import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Contato from './Contato';
import Produto from './Produto';

import NotFound from './NotFound';


function App() {
  return (
    <BrowserRouter>
   <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="contato" element={<Contato />} />
      <Route path="produto/:id/*" element={<Produto />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  <Footer />
    </BrowserRouter>
  );
}

export default App;
