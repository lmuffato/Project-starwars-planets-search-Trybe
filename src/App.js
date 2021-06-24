import React from 'react';
import './App.css';
import SWProvider from './context/SWProvider';

function App() {
  return (
    <SWProvider>
      <span>Hello, App!</span>
    </SWProvider>
  );
}

export default App;
