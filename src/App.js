import React from 'react';
import Home from './pages/Home';
import StarWarsProvider from './providers/starWars';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import './css/Home.css';
import './css/Loading.css';

function App() {
  return (
    <StarWarsProvider>
      <Home />
    </StarWarsProvider>
  );
}

export default App;
