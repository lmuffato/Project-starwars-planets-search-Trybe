import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';
import DataList from './DataList';

export default function Table() {
  const [selCategory, setSelCategory] = useState('population');
  const [selComparison, setSelComparison] = useState('moreThan');
  const [selNumber, setSelNumber] = useState(0);
  // const [resultFilter, setResultFilter] = useState([]);
  const {
    data,
    search,
    setSearch,
    setSearchItems,
    setFilter } = useContext(AppContext);

  const handleChange = ({ target: { value } }) => {
    setFilter({ filters: { filterByName: value } });
    setSearchItems(value.length);
    const listItems = data.filter((item) => item.name.includes(value));
    setSearch(listItems);
  };

  const filterSelectChange = ({ target }) => {
    switch (target.id) {
    case 'column-filter':
      setSelCategory(target.value);
      break;
    case 'comparison-filter':
      setSelComparison(target.value);
      break;
    case 'value-filter':
      setSelNumber(target.value);
      break;
    default:
    }
  };

  const filterParamList = () => {
    let listItems = [];
    // listItems = data.filter((element) => (element[selCategory] > selNumber));
    // setSearch(listItems);

    switch (selComparison) {
    case 'lessThan':
      listItems = data.filter(
        (element) => (parseInt(element[selCategory], 0) < parseInt(selNumber, 0)),
      );
      setSearch(listItems);
      break;
    case 'moreThan':
      listItems = data.filter(
        (element) => (parseInt(element[selCategory], 0) > parseInt(selNumber, 0)),
      );
      setSearch(listItems);
      break;
    case 'equals':
      listItems = data.filter(
        (element) => (parseInt(element[selCategory], 0) === parseInt(selNumber, 0)),
      );
      setSearch(listItems);
      break;
    default:
    }

    console.log(search);
    // setResultFilter(listItems);
    // setSearch(resultFilter);
    // console.log(selNumber, selComparison, resultFilter);
  };

  return (
    <>
      <label
        htmlFor="name-filter"
      >
        Filtrar Nomes
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
        <select
          id="column-filter"
          type="text"
          data-testid="column-filter"
          onChange={ filterSelectChange }
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
        Categorias
        <select
          id="comparison-filter"
          type="text"
          data-testid="comparison-filter"
          onChange={ filterSelectChange }
        >
          <option value="moreThan">maior que</option>
          <option value="lessThan">menor que</option>
          <option value="equals">igual a</option>
        </select>
        <input
          id="value-filter"
          type="number"
          value={ selNumber }
          data-testid="value-filter"
          onChange={ filterSelectChange }
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ filterParamList }
        >
          Filtrar
        </button>
      </label>
      <table style={ { border: '1px solid black' } }>
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
