import React from 'react';
import './App.css';
import { Routes, Route, } from 'react-router-dom';
import Landing from './features/landing/landing';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/*' element={<>Página no encontrada</>} />
    </Routes>
  );
}

export default App;
