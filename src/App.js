import React from 'react';
import './App.css';
import { Routes, Route, } from 'react-router-dom';
import Landing from './features/landing/landing';
import Aforo from './features/aforo/aforo';

function App() {
  return (
    <Routes>
      <Route path='/aforo' element={<Landing />} />
      <Route path='/aforo' element={<Aforo />} />
      <Route path='/*' element={<>Página no encontrada</>} />
    </Routes>
  );
}

export default App;
