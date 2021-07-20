import React from 'react';
import PropTypes from 'prop-types';
import { PlanetContext } from '../context/PlanetProvider';
import getApi from './GetApi';

const FormFilter = ({ setFilters, filters, setData }) => {
  const valuesInit = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];
  const { data } = React.useContext(PlanetContext);
  const [inputFilters, setInputFilters] = React.useState({});
  const [valuesArray, setValuesArray] = React.useState(valuesInit);

  const valueFor = ['maior que', 'menor que', 'igual a'];

  const handleChange = ({ target: { name, value } }) => {
    setInputFilters({
      ...inputFilters,
      [name]: value,
    });
  };

  React.useEffect(() => {
    const filteredValues = valuesArray
      .filter((elem) => elem !== inputFilters.column);
    setValuesArray(filteredValues);
  }, [inputFilters, setInputFilters]);

  const filterValues = () => {
    setFilters({
      ...filters,
      filterByNumericValues: [...filters.filterByNumericValues,
        inputFilters],
    });

    const filterData = data.filter((elem) => {
      const { column } = inputFilters;
      if (inputFilters.comparison === 'maior que') {
        return elem[column] > +(inputFilters.value);
      }
      if (inputFilters.comparison === 'menor que') {
        return elem[column] < +(inputFilters.value);
      }
      return elem[column] === inputFilters.value;
    });
    setData(filterData);
  };
  const deleteFilter = async (e, index) => {
    const delFilter = filters.filterByNumericValues;

    console.log(e.target.id, delFilter, index);

    const deletar = delFilter.filter((item, i) => index !== i);
    console.log(deletar);

    setFilters({
      ...filters,
      filterByNumericValues: deletar,
    });
    const getPlanets = await getApi();
    setData(getPlanets);
  };
  return (
    <div>
      <select data-testid="column-filter" name="column" onChange={ handleChange }>
        {valuesInit
          .map((element) => <option value={ element } key={ element }>{element}</option>)}
      </select>
      <select
        data-testid="comparison-filter"
        name="comparison"
        onChange={ handleChange }
      >
        <option>Select option</option>
        {valueFor
          .map((element) => <option value={ element } key={ element }>{element}</option>)}
      </select>
      <input
        type="number"
        data-testid="value-filter"
        onChange={ handleChange }
        name="value"
      />
      <button
        data-testid="button-filter"
        type="button"
        onClick={ () => filterValues() }
      >
        Filtrar
      </button>
      {filters.filterByNumericValues.map((item, index) => (
        <button
          key={ index }
          type="button"
          data-testid="filter"
        >
          <span
            className="btn-filter"
          >
            {item.value}
          </span>
          <span className="btn-filter">
            { item.column}
          </span>
          <span className="btn-filter">
            {item.comparison}
          </span>
          <button
            type="button"
            id={ index }
            onClick={ (e) => deleteFilter(e, index) }
            style={ {
              background: 'red',
              borderRadius: '50%',
              padding: '5px',
              color: 'white',
              position: 'absolute',
              top: '25px' } }
          >
            X
          </button>
        </button>
      ))}

    </div>
  );
};

FormFilter.propTypes = {
  filterByNumericValues: PropTypes.number,
  filters: PropTypes.object.isRequired,
  setFilters: PropTypes.func.isRequired,
}.isRequired;

export default FormFilter;
