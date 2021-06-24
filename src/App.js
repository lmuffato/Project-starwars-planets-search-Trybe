import React, { useState, useEffect } from 'react';
import './App.css';
import MyContext from './context/myContext';
import Home from './pages/home';
import fetchApi from './services/fetchApi';

function App() {
  const [planetsArray, setPlanetsArray] = useState([]);
  const [loadingApi, setLoadingApi] = useState(true);

  useEffect(() => {
    fetchApi().then((response) => setPlanetsArray(response))
      .then(() => setLoadingApi(false));
  }, []);

  return (
    <MyContext.Provider value={ { data: planetsArray, loadingApi } }>
      <Home />
    </MyContext.Provider>
  );
}

export default App;
