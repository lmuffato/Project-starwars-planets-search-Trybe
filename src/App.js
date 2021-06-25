import React from 'react';
import './App.css';
import SWProvider from './context/SWProvider';
import Table from './components/Table';
import Filters from './components/Filters';
import starwars from './images/1200px-Star_Wars_Logo.svg.png';

function App() {
  return (
    <div className="page">
      <SWProvider>
        <img
          src={ starwars }
          alt="star wars logo"
          className="logo-img"
        />
        <Filters />
        <table className="table">
          <Table />
        </table>
      </SWProvider>
    </div>
  );
}

export default App;
