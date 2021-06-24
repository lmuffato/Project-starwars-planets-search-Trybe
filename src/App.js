import React, { useState, useEffect } from 'react';
import Context from './context/Context';
import Table from './components/table';

function App() {
  const [data, setData] = useState([]);
  const planets = {
    data,
    setData,
  };

  useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((json) => setData(json.results));
  }, []);

  return (
    <main>
      <Context.Provider value={ planets }>
        <div>filters</div>
        <div>
          <Table />
        </div>
      </Context.Provider>
    </main>
  );
}

export default App;
