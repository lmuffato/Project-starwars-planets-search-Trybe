import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';
import DataList from './DataList';
import '../styles/index.css';

export default function Table() {
  const [selCategory, setSelCategory] = useState('');
  const [selComparison, setSelComparison] = useState('');
  const [selNumber, setSelNumber] = useState(0);
  // const [selOptions, setSelOptions] = useState(
  //   ['orbital_period'],
  // );
  const {
    data,
    search,
    filter,
    setSearch,
    setSearchItems,
    setFilter } = useContext(AppContext);

  const handleChange = ({ target: { value } }) => {
    setFilter({ filters: { filterByName: value } });
    setSearchItems(value.length);
    const listItems = data.filter((item) => item.name.includes(value));
    setSearch(listItems);
  };

  const filterSelectChange = () => {
    setFilter((prevState) => (
      { ...prevState,
        filterByNumericValues: [
          ...prevState.filterByNumericValues,
          {
            column: selCategory,
            comparison: selComparison,
            value: selNumber,
          },
        ],
      }
    ));
  };

  const filterParamList = () => {
    let listItems = [];
    // listItems = data.filter((element) => (element[selCategory] > selNumber));
    // setSearch(listItems);
    switch (selComparison) {
    case 'maior que':
      listItems = data.filter(
        (element) => (parseInt(element[selCategory], 0) > parseInt(selNumber, 0)),
      );
      setSearch(listItems);
      filterSelectChange();
      break;
    case 'menor que':
      listItems = data.filter(
        (element) => (parseInt(element[selCategory], 0) < parseInt(selNumber, 0)),
      );
      setSearch(listItems);
      filterSelectChange();
      break;
    case 'igual a':
      listItems = data.filter(
        (element) => (parseInt(element[selCategory], 0) === parseInt(selNumber, 0)),
      );
      setSearch(listItems);
      filterSelectChange();
      break;
    default:
    }

    const { filterByNumericValues } = filter;
    console.log(filterByNumericValues[filterByNumericValues.length - 1].column);

    // setResultFilter(listItems);
    // setSearch(resultFilter);
    // console.log(selNumber, selComparison, resultFilter);
  };

  return (
    <>
      <div id="filterInputs">
        <label
          htmlFor="name-filter"
        >
          Nomes
          <br />
          <input
            id="name-filter"
            type="text"
            placehold="Pesquisar"
            data-testid="name-filter"
            onChange={ handleChange }
          />
        </label>
        <label
          htmlFor="column-filter"
        >
          Categorias
          <br />
          <select
            id="column-filter"
            type="text"
            data-testid="column-filter"
            onChange={ ({ target: { value } }) => setSelCategory(value) }
          >
            <option value="orbital_period">orbital_period</option>
            <option value="diameter">diameter</option>
            <option value="rotation_period">rotation_period</option>
            <option value="population">population</option>
            <option value="surface_water">surface_water</option>
          </select>
        </label>
        <label
          htmlFor="comparison-filter"
        >
          Comparação
          <br />
          <select
            id="comparison-filter"
            type="text"
            data-testid="comparison-filter"
            onChange={ ({ target: { value } }) => setSelComparison(value) }
          >
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
        </label>
        <label
          htmlFor="value-filter"
        >
          Valor
          <br />
          <input
            id="value-filter"
            type="number"
            value={ selNumber }
            data-testid="value-filter"
            onChange={ ({ target: { value } }) => setSelNumber(value) }
          />
        </label>
        <button
          type="button"
          data-testid="button-filter"
          onClick={ () => filterParamList() }
        >
          Filtrar
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>Url</th>
          </tr>
        </thead>
        <tbody>
          {
            (search.length === 0)
              ? <DataList data={ data } />
              : <DataList data={ search } />
          }
        </tbody>
      </table>
    </>
  );
}
