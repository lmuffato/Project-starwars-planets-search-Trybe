import React, { useContext } from 'react';
import PlanetContext from '../Context/ContextPlanets';

const options = [
  'name',
  'rotation_period',
  'orbital_period',
  'diameter',
  'climate',
  'terrain',
  'surface_water',
  'population',
];

const one = 1;

export default function SortByColumn() {
  const { data, newData } = useContext(PlanetContext);
  const filteringColumnSort = () => {
    const { column, sort } = data;
    const firstPlanet = newData[0];
    if (Number(firstPlanet[column])) {
      if (sort === 'DESC') {
        return newData.sort((x, y) => {
          if (Number(x[column]) < Number(y[column])) {
            return 1;
          }
          if (Number(x[column]) > Number(y[column])) {
            return -one;
          }
          return 0;
        });
      }
      return newData.sort((x, y) => {
        if (Number(x[column]) > Number(y[column])) {
          return 1;
        }
        if (Number(x[column]) < Number(y[column])) {
          return -one;
        }
        return 0;
      });
    }
    if (sort === 'DESC') {
      return newData.sort((x, y) => {
        if (x[column] < (y[column])) {
          return 1;
        }
        if ((x[column]) > (y[column])) {
          return -one;
        }
        return 0;
      });
    }
    return newData.sort((x, y) => {
      if ((x[column]) > (y[column])) {
        return 1;
      }
      if ((x[column]) < (y[column])) {
        return -one;
      }
      return 0;
    });
  };

  return (
    <>
      <select
        name="column"
        data-testid="column-sort"
        onChange={ filteringColumnSort }
      >
        { options.map((el, i) => (
          <option key={ i }>
            { el }
          </option>
        ))}
      </select>
      <label htmlFor="DESC">
        DES
        <input
          data-testid="column-sort-input-desc"
          type="radio"
          name="sort"
          value="DESC"
          onChange={ filteringColumnSort }
        />
      </label>
      <label htmlFor="ASC">
        ASC
        <input
          data-testid="column-sort-input-asc"
          type="radio"
          name="sort"
          value="ASC"
          onChange={ filteringColumnSort }
        />
      </label>
      <button
        data-testid="column-sort-button"
        type="button"
        onClick={ filteringColumnSort }
      >
        Ordenar
      </button>
    </>
  );
}
