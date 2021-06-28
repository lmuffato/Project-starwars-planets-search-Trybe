import React from 'react';
import PropTypes from 'prop-types';
import { StarWarsContext } from '../provider/Provider';

const SelectFilter = ({ setFilters, filters, setData }) => {
  const valuesArrayInit = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];
  const { data } = React.useContext(StarWarsContext);
  const [inputFilters, setInputFilters] = React.useState({});
  const [valuesArray, setValuesArray] = React.useState(valuesArrayInit);

  const valueFor = ['maior que', 'menor que', 'igual a'];

  const handleChangeSelect = ({ target: { name, value } }) => {
    setInputFilters({
      ...inputFilters,
      [name]: value,
    });
  };

  React.useEffect(() => {
    const filteredValues = valuesArray
      .filter((elem) => elem !== inputFilters.column);
    setValuesArray(filteredValues);
  }, [inputFilters, valuesArray]);

  const valuesForFilter = () => {
    setFilters({
      ...filters,
      filterByNumericValues: [...filters.filterByNumericValues,
        inputFilters],
    });
    const dataFiltered = data.filter((elem) => {
      const { column } = inputFilters;
      if (inputFilters.comparison === 'maior que') {
        return elem[column] > +(inputFilters.value);
      }
      if (inputFilters.comparison === 'menor que') {
        return elem[column] < +(inputFilters.value);
      }
      return elem[column] === inputFilters.value;
    });
    setData(dataFiltered);
  };

  return (
    <div>
      <select data-testid="column-filter" name="column" onChange={ handleChangeSelect }>
        {valuesArray
          .map((element) => <option value={ element } key={ element }>{element}</option>)}
      </select>
      <select
        data-testid="comparison-filter"
        name="comparison"
        onChange={ handleChangeSelect }
      >
        <option>Select option</option>
        {valueFor
          .map((element) => <option value={ element } key={ element }>{element}</option>)}
      </select>
      <input
        type="number"
        data-testid="value-filter"
        onChange={ handleChangeSelect }
        name="value"
      />
      <button
        data-testid="button-filter"
        type="button"
        onClick={ valuesForFilter }
      >
        Filtrar
      </button>
    </div>
  );
};

SelectFilter.propTypes = {
  filterByNumericValues: PropTypes.number,
  filters: PropTypes.object.isRequired,
  setFilters: PropTypes.func.isRequired,
}.isRequired;

export default SelectFilter;
