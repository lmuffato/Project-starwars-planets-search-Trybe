// requisito feito com ajuda do colega Nilson Ribeiro.
import React from 'react';
import './App.css';
import Provider from './Components/Provider';
import InputSearchByName from './Components/InputSearchByName';
import SearchByName from './Components/SearchByName';
import ClearFilterButton from './Components/ClearFilterButton';
import DropDownFilters from './Components/DropDownFilters';

function App() {
  return (
    <div className="scifiUI">
      <Provider>
        <header>
          <InputSearchByName />
          <DropDownFilters />
          <ClearFilterButton />
        </header>
        <SearchByName />
      </Provider>
    </div>
  );
}

export default App;
