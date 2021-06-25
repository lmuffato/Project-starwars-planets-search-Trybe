import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Provider from './context/Provider';
import Table from './pages/Table';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Provider>
        <Header />
        <Table />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
