import React, { useState } from 'react';
import starWarsPlanets from './index';

function Provider({ children }) {
  const [data, setData] = useState('initialStateA');
  const contextValue = {
    data,
    setData,
  };

  return (
    <starWarsPlanets.Provider value={ contextValue }>
      {children}
    </starWarsPlanets.Provider>
  );
}

export default Provider;
