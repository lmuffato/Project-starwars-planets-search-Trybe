import React, { useContext } from 'react';
import Context from '../context/Context';

const Input = () => {
  const { setName } = useContext(Context);
  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        onChange={ (event) => setName({
          filters: {
            filterByName: {
              name: event.target.value,
            },
          },
        }) }
      />
    </div>
  );
};

export default Input;
