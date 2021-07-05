import React from 'react';
import './App.css';
import Provider from './context/Provider';
import Table from './components/Table';
import Input from './components/Input';
import Comparison from './components/Comparison';

function App() {
  return (
    <Provider>
      <Input />
      <Comparison />
      <Table />
    </Provider>
  );
}

/* Projeto realizado com a ajuda do vídeo:
https://www.youtube.com/watch?v=5Tq4-UgPTDs&t=270s
 */
export default App;
