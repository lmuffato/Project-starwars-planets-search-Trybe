import React, { useContext, useEffect, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const { data, filters } = useContext(PlanetsContext);
  const [renderData, setRenderData] = useState([]);
  const [filterStore, setFilterStore] = useState([]);
  const [currentSort, setCurrentSort] = useState('');

  useEffect(() => {
    const getGlobal = () => {
      const { filtersByName: { name } } = filters;
      const filtered = data
        .filter((eachPlanet) => (eachPlanet.name.includes(name)));
      if (filtered.length > 0) {
        setCurrentSort({ column: 'name', sort: 'ASC' });
        setRenderData(filtered);
      } else {
        setRenderData(data);
      }
    };
    getGlobal();
  }, [data, filters]);

  useEffect(() => {
    if (filterStore && filterStore.length >= 1) setRenderData(filterStore);
  }, [filterStore]);

  useEffect(() => {
    const filtering = () => {
      const { filterByNumericValues } = filters;
      const filtered = [];
      const currentData = (i) => {
        if (i === 0) return data;
        return filtered[i - 1];
      };
      filterByNumericValues.forEach((eachfilter, index) => {
        const { value, column, comparison } = eachfilter;

        if (comparison === 'maior que') {
          const match = currentData(index)
            .filter((planet) => Number(planet[column]) > Number(value));
          filtered.push(match);
        }
        if (comparison === 'igual a') {
          const match = currentData(index)
            .filter((planet) => Number(planet[column]) === Number(value));
          filtered.push(match);
        }
        if (comparison === 'menor que') {
          const match = currentData(index)
            .filter((planet) => Number(planet[column]) < Number(value));
          filtered.push(match);
        }
      });
      const lastOccurence = filtered.length - 1;
      if (lastOccurence !== undefined) return setFilterStore(filtered[lastOccurence]);
      setFilterStore(filtered);
    };
    filtering();
  }, [filters, data]);

  useEffect(() => {
    setCurrentSort(filters.order);
  }, [filters]);

  const sortFunction = (arrayData) => {
    function checkIsNumber(string) {
      return Number.isNaN(+string) ? string : +string;
    }

    const sorted = arrayData;
    return sorted.sort((a, b) => {
      const menosUm = -1;
      const um = 1;
      const zero = 0;
      const { column } = currentSort;

      const value1 = checkIsNumber(a[column]);
      const value2 = checkIsNumber(b[column]);

      if (value1 < value2) {
        return currentSort.sort === 'ASC' ? menosUm : um;
      }
      if (value1 > value2) {
        return currentSort.sort === 'ASC' ? um : menosUm;
      }
      return zero;
    });
  };

  // const sorted = arrayData;
  // return sorted.sort((a, b) => {
  //   if (a[currentSort.column] < b[currentSort.column]) {
  //     return currentSort.sort === 'ASC' ? menosUm : um;
  //   }
  //   if (a[currentSort.column] > b[currentSort.column]) {
  //     return currentSort.sort === 'ASC' ? um : menosUm;
  //   }
  //   return 0;
  // });

  return (
    <div>
      <h2>{renderData.length}</h2>
      <table>
        <thead>
          <tr>
            {data[0] && Object.keys(data[0]).map((eachKey) => (
              <th key={ eachKey }>{eachKey}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortFunction(renderData) && sortFunction(renderData).map((eachPlanet) => (
            <tr key={ eachPlanet.name }>
              {Object.values(eachPlanet).map((planet, index) => (
                index === 0
                  ? (<td data-testid="planet-name" key={ planet }>{planet}</td>)
                  : (<td key={ planet }>{planet}</td>)
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;

// https://www.smashingmagazine.com/2020/03/sortable-tables-react/
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio
// https://github.com/tryber/sd-010-a-project-starwars-planets-search/commit/fa35f1162e3575a041f1010117e62f0a7304e199 - PR COLEGA - segunda parte sort;
