import React, { useContext } from 'react';
import Context from '../context/Context';

const Input = () => {
  const { setNameInput } = useContext(Context);
  return (
    <div>
      <input
        name="name-filter"
        data-testid="name-filter"
        type="text"
        onChange={ (event) => setNameInput({
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
