import React from 'react';
import './css/App.css';
import Home from './pages/Home';
import StarWarsProvider from './providers/starWars';

function App() {
  return (
    <StarWarsProvider>
      <Home />
    </StarWarsProvider>
  );
}

export default App;
