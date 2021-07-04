import React, { useContext } from 'react';
import Context from '../context/Context';

function InputText() {
  const { getFilter, setGetFilter } = useContext(Context);

  const handleChange = ({ target }) => {
    const updateFilterName = async () => {
      await setGetFilter({ filterByName: { name: target.value } });
    };
    updateFilterName();
    console.log(getFilter);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Digite o texto que deseja para filtro"
        data-testid="name-filter"
        onChange={ (event) => handleChange(event) }
      />
    </div>
  );
}

export default InputText;
