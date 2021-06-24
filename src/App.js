import React from 'react';
import Provider from './context/provider';
import Home from './Home';
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
