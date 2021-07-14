import React from 'react';
import './App.css';
import Provider from './context/Provider';
import Table from './components/Table';
import Input from './components/Input';
import Comparison from './components/Comparison';
import SelectedFilters from './components/SelectedFilters';
import Order from './components/Order';

function App() {
  return (
    <Provider>
      <Input />
      <Comparison />
      <SelectedFilters />
      <Order />
      <Table />
    </Provider>
  );
}

/* Projeto realizado com a ajuda dos links abaixo:
https://www.youtube.com/watch?v=5Tq4-UgPTDs&t=270s
https://www.youtube.com/watch?v=Rv2eJK1iOTo
https://github.com/tryber/sd-010-a-project-starwars-planets-search/pull/2/files
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
 */
export default App;
