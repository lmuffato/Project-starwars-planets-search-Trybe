import '../styles/index.css';
import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';
import DataList from './DataList';
import TableHead from './TableHead';

export default function Table() {
  const [saveFilter, setSaveFilter] = useState([]);
  const [selComparison, setSelComparison] = useState('');
  const [selNumber, setSelNumber] = useState(0);
  const [selOptions, setSelOptions] = useState(
    ['orbital_period', 'diameter', 'rotation_period',
      'population', 'surface_water'],
  );

  const {
    data, search, filter, setSearch, setSearchItems, setFilter,
    defineOrder, /* orderInput, */ selCategory, setSelCategory, setOrderInput,
  } = useContext(AppContext);

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

  const saveFilterList = () => {
    setSaveFilter([...saveFilter, [selCategory, selComparison, selNumber]]);
    console.log(saveFilter);
  };

  const removeCategory = () => {
    const filterOption = selOptions.filter((item) => (item !== selCategory));
    setSelOptions(filterOption);
  };

  const removeItemByItem = (index) => {
    const { filterByNumericValues } = filter;
    const positionItem = index + 1;
    const result = filterByNumericValues.filter((ele, ind) => (positionItem !== ind));
    setFilter((prevState) => (
      { ...prevState,
        filterByNumericValues: result,
      }
    ));

    const namesFiltered = saveFilter.filter((ele, ind) => (index !== ind));
    setSaveFilter(namesFiltered);
    setSearch(data);
  };

  const filterParamList = () => {
    let listItems = [];

    switch (selComparison) {
    case 'maior que':
      listItems = data.filter(
        (element) => (parseInt(element[selCategory], 0) > parseInt(selNumber, 0)),
      );
      setSearch(listItems);
      filterSelectChange();
      removeCategory();
      saveFilterList();
      break;
    case 'menor que':
      listItems = data.filter(
        (element) => (parseInt(element[selCategory], 0) < parseInt(selNumber, 0)),
      );
      setSearch(listItems);
      filterSelectChange();
      removeCategory();
      saveFilterList();
      break;
    case 'igual a':
      listItems = data.filter(
        (element) => (parseInt(element[selCategory], 0) === parseInt(selNumber, 0)),
      );
      setSearch(listItems);
      filterSelectChange();
      removeCategory();
      saveFilterList();
      break;
    default:
    }

    const { filterByNumericValues } = filter;
    console.log(filterByNumericValues[filterByNumericValues.length - 1].column);
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
            {
              selOptions.map(
                (ele) => (<option key={ ele } value={ ele }>{ele}</option>),
              )
            }
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
        <select
          data-testid="column-sort"
          onChange={ ({ target: { value } }) => setSelCategory(value) }
        >
          {
            selOptions.map(
              (ele) => (
                <option key={ ele } value={ ele }>{ele}</option>
              ),
            )
          }
        </select>
        <label
          htmlFor="column-sort"
        >
          Ordenar Colunas
          <br />
          <input
            name="column-sort"
            type="radio"
            value="ASC"
            data-testid="column-sort-input-asc"
            onChange={ () => setOrderInput('ASC') }
          />
          ASC
          <input
            name="column-sort"
            type="radio"
            value="DESC"
            data-testid="column-sort-input-desc"
            onChange={ () => setOrderInput('DESC') }
          />
          DESC
        </label>
        <button
          type="button"
          data-testid="column-sort-button"
          onClick={ () => defineOrder() }
        >
          Ordenar
        </button>
      </div>
      <div data-testid="filter">
        { saveFilter.map((ele, index) => (
          <div key={ index }>
            <span>{ele[0]}</span>
            <span>{ele[1]}</span>
            <span>{ele[2]}</span>
            <button
              type="button"
              onClick={ () => removeItemByItem(index) }
            >
              X
            </button>
          </div>
        )) }
      </div>
      <table>
        { TableHead() }
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
