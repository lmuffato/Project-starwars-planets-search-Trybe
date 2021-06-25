import React, { useContext } from 'react';
import Context from '../context/Context';

const Filter = () => {
  const { handleinput } = useContext(Context);
  return (
    <input
      data-testid="name-filter"
      type="text"
      onChange={ (event) => handleinput(event) }
    />
  );
};

export default Filter;
