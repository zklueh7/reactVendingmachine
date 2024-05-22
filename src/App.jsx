import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import './App.css'
import Ollipop from './Ollipop';
import BoomChicka from './BoomChicka';
import Cashews from './Cashews';
import VendingMachine from './VendingMachine';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/ollipop" element={<Ollipop/>} />
          <Route path="boomchicka" element={<BoomChicka/>} />
          <Route path="cashews" element={<Cashews/>} />
          <Route path="/" element={<VendingMachine/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
