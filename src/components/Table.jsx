import React, { useContext, useEffect, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const { data, filters } = useContext(PlanetsContext);
  const [renderData, setRenderData] = useState([]);
  const [filterStore, setFilterStore] = useState([]);

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
    if (filterStore.length >= 1) setRenderData(filterStore);
  }, [filterStore]);

  useEffect(() => {
    const filtering = () => {
      const { filterByNumericValues } = filters;
      const filtered = [];
      filterByNumericValues.forEach((eachfilter) => {
        const { value, column, comparison } = eachfilter;
        console.log(column);
        console.log(comparison);
        console.log(value);
        if (comparison === 'maior que') {
          const c = data.filter((planet) => Number(planet[column]) > Number(value));
          filtered.push(...c);
        }
        if (comparison === 'igual a') {
          const c = data.filter((planet) => Number(planet[column]) === Number(value));
          filtered.push(...c);
        }
        if (comparison === 'menor que') {
          const c = data.filter((planet) => Number(planet[column]) < Number(value));
          filtered.push(...c);
        }
        setFilterStore(filtered);
      });
    };
    filtering();
  }, [data, filters]); // tamo quase

  // useEffect(() => {
  //   const newRender = () => {
  //     if (filterStore.length > 1) setRenderData(filterStore);
  //   };
  //   newRender();
  // }, [filterStore]);

  return (
    <div>
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
