import React from 'react';
import './App.css';
import { StarWarsContextProvider } from './context/StarWarsContext';
import Home from './pages/Home';

function App() {
  return (
    <StarWarsContextProvider>
      <Home />
    </StarWarsContextProvider>
  );
}

export default App;
