import React, { useState } from 'react';
import StarWarsContext from '../contexts/starWars';

export default function StarWarsProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [isLoading, setLoading] = useState(false);

  return (
    <StarWarsContext.Provider value={ { planets, setPlanets, isLoading, setLoading } }>
      {children}
    </StarWarsContext.Provider>
  );
}
