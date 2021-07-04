import React from 'react';
import './App.css';
import Provider from './context/Provider';
import Data from './components/Data';

function App() {
  return (
    <Provider>
      <span>Star Wars Planet Search</span>
      <Data />
    </Provider>
  );
}

export default App;
