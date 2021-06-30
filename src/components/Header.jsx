import React, { useState, useContext } from 'react';
import PlanetContext from '../context/PlanetContext';
import addValueInAEspecificIndex, { removeSpecificIndex } from '../services/workAround';

function Header() {
  const allCategories = ['population', 'orbital_period', 'diameter',
    'rotation_period', 'surface_water'];
  const { filters, setFilters } = useContext(PlanetContext);
  const [nameInput, setNameInput] = useState('');
  const [numberInput, setNumberInput] = useState('');
  const [categories, setCategories] = useState(allCategories);
  const [category, setCategory] = useState(allCategories[0]);
  const [comparation, setComparation] = useState('maior que');
  const [elementFilters, setElementFilters] = useState([]);

  const handleChange = (event) => {
    const { value, id } = event.target;

    switch (id) {
    case 'name': {
      setNameInput(value);
      setFilters({ ...filters, name: value });
      break;
    }
    case 'number': {
      setNumberInput(value);
      break;
    }
    case 'categories': {
      setCategory(value);
      break;
    }
    case 'comparation': {
      setComparation(value);
      break;
    }
    default:
    }
  };

  const handleClick = (event) => {
    event.preventDefault();
    if (numberInput !== '') {
      switch (comparation) { // veja o porque dessa lógica em services/handleFilter
      case 'maior que':
        setFilters({ [category]: `>${numberInput}`, ...filters });
        break;
      case 'menor que':
        setFilters({ [category]: `<${numberInput}`, ...filters });
        break;
      default: setFilters({ [category]: `=${numberInput}`, ...filters });
        break;
      }
      setElementFilters([...elementFilters,
        [`${category}`, `${comparation}`, `${numberInput}`]]);

      const newList = removeSpecificIndex(categories, categories.indexOf(category));
      setCategories(newList);
      setCategory(newList[0]);
    }
  };

  const handleDeleteElementFilter = (index) => {
    const currElementFilter = elementFilters[index][0];
    const removeThisElement = elementFilters.slice();
    removeThisElement.splice(index, 1);
    const removeThisFilter = { ...filters };
    delete removeThisFilter[currElementFilter];
    setElementFilters(removeThisElement);
    setFilters(removeThisFilter);
    const retrieveCategory = addValueInAEspecificIndex(categories, 0, currElementFilter);
    setCategories(retrieveCategory);
  };

  return (
    <header>
      <form>
        <input
          id="name"
          type="text"
          data-testid="name-filter"
          placeholder="Filter by name"
          value={ nameInput }
          onChange={ handleChange }
        />
        <select
          id="categories"
          data-testid="column-filter"
          value={ category }
          onChange={ handleChange }
        >
          {categories.map((ctgr, index) => (
            <option
              key={ `${ctgr}${index}` }
              value={ `${ctgr}` }
            >
              {ctgr}
            </option>))}
        </select>
        <select
          id="comparation"
          data-testid="comparison-filter"
          value={ comparation }
          onChange={ handleChange }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          id="number"
          type="number"
          data-testid="value-filter"
          value={ numberInput }
          onChange={ handleChange }
        />
        <button
          id="filter-btn"
          type="button"
          data-testid="button-filter"
          onClick={ (e) => { handleClick(e); } }
        >
          Filtrar
        </button>
        {elementFilters.map((filter, index) => (
          <div key={ index } data-testid="filter">
            {`${filter[0]} ${filter[1]} ${filter[2]}`}
            <button
              type="button"
              onClick={ () => handleDeleteElementFilter(index) }
            >
              X
            </button>
          </div>))}
      </form>
    </header>
  );
}

export default Header;
