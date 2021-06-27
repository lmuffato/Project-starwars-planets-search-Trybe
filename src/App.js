import React from 'react';
import Provider from './context/provider';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <div>
      <Provider>
        <Home />
      </Provider>
    </div>
  );
}

export default App;
