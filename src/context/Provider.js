import React, { useState, useEffect } from 'react';
import context from './context';
import { getPlanets } from '../services/getPlanets';

function Provider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const setThePlanets = async () => {
      const thePlanets = await getPlanets();
      setPlanets([...thePlanets]);
      setLoading(false);
    }
    setThePlanets();
  }, []);

  const store = {
    planets,
    isLoading,
  }

  return (
    <context.Provider value={ store }>
      { children }
    </context.Provider>
  )
}

export default Provider
