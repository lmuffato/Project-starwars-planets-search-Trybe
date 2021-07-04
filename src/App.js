import React from 'react';
import './App.css';
import SWProvider from './Context/SWProvider';
import Header from './Component/Header';
import FiltroInput from './Component/FiltroInput';

function App() {
  return (
    <SWProvider>
      <Header />
      <br />
      <FiltroInput />
    </SWProvider>
  );
}

export default App;
