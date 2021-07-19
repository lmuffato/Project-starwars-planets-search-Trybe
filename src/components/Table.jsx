import React, { useContext, useEffect, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const { data, filters } = useContext(PlanetsContext);
  const [renderData, setRenderData] = useState([]);
  const [filterStore, setFilterStore] = useState([]);
  // const [refilter, setRefilter] = useState([]);

  useEffect(() => {
    const getGlobal = () => {
      const { filtersByName: { name } } = filters;
      const filtered = data
        .filter((eachPlanet) => (eachPlanet.name.includes(name)));
      if (filtered.length > 0) {
        setRenderData(filtered);
      } else {
        setRenderData(data);
      }
    };
    getGlobal();
  }, [data, filters]);

  useEffect(() => {
    if (filterStore && filterStore.length >= 1) setRenderData(filterStore); // render data recebe array de objetos-planetas
  }, [filterStore]); // filterstore tambem é um array de objeto-planeta

  useEffect(() => {
    const filtering = () => {
      const { filterByNumericValues } = filters;
      const filtered = [];
      const currentData = (i) => {
        if (i === 0) return data;
        return filtered[i - 1];
      };
      // data = array de obj planetas
      // filtered depois de um foreach = array de array de objetops
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
          {renderData.map((eachPlanet) => (
            <tr key={ eachPlanet.name }>
              {Object.values(eachPlanet).map((planet) => (
                <td key={ planet }>{planet}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
