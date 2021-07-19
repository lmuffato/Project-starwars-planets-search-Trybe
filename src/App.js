import React from 'react';
import './App.css';
import Table from './components/Table';
import StarWarsProvider from './context/StarWarsProvider';
import InputBox from './components/InputBox';
import NumericFilter from './components/NumericFilter';
import Sort from './components/Sort';
import Footer from './components/Footer';

function App() {
  return (
    <StarWarsProvider>
      <div>
        <h1>StarWars Planets Search!</h1>
        <InputBox />
        <div>
          <NumericFilter />
        </div>
        <div>
          <Sort />
        </div>
        <Table />
        <div>
          <Footer />
        </div>
      </div>
    </StarWarsProvider>
  );
}

export default App;
