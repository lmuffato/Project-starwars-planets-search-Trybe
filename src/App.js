import React from 'react';
import './App.css';
import Provider from './context/Provider';
import Data from './components/Data';
import InputText from './components/InputText';

function App() {
  return (
    <Provider>
      <h1>Star Wars Planet Search</h1>
      <InputText />
      <Data />
    </Provider>
  );
}

export default App;
