import React from 'react';
import './App.css';
import { Routes, Route, } from 'react-router-dom';
import Landing from './features/landing/landing';
import AforoOficina from './features/aforoOficina/AforoOficina';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/aforo' element={<AforoOficina />} />
      <Route path='/*' element={<>Página no encontrada</>} />
    </Routes>
  );
}

export default App;
