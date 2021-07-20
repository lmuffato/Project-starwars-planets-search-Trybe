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

// tarefas

// organizar a o estado e a função que faz intermédio do dado sort no global
// settar disparo do botao para o a função intermédiaria no global
// organizar o useEffect que observa esse estado intermediario e roda pra settar na chave filters
// useEffect na tabela olhando pro filters também mas condicionado a algo ( estado local?) pra mudar ordem

// tabela lê o global o estado local pra se organizar: -pesquisar

// https://www.smashingmagazine.com/2020/03/sortable-tables-react/
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio
