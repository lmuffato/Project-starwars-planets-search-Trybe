import { dropDrawComparation } from '../data';

const getDataAPI = async () => {
  const request = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const data = await request.json();
  return data;
};

export const filterForNumber = (planets, { column, value, comparison }) => {
  const newFilter = planets.filter((planet) => {
    if (comparison === 'maior que') return Number(planet[column]) > value;
    if (comparison === 'menor que') return Number(planet[column]) < value;
    if (comparison === 'igual a') return planet[column] === value;
    return planets;
  });

  return newFilter;
};

export const checkedFilter = (filterNumbers, column) => {
  let bool = true;
  filterNumbers.forEach((filter) => {
    if (filter.column === column) bool = false;
  });
  return bool;
};

export const chekedDropDraw = (filterByNumericValue) => {
  const keys = filterByNumericValue
    ? filterByNumericValue.map((item) => item.column)
    : ['sem filtro'];

  const filterCategory = dropDrawComparation.filter((item) => item !== keys[0]);
  console.log(filterCategory);
  return filterCategory;
};

export default getDataAPI;
