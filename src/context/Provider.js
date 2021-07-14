import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import fetchAPI from '../service/FetchAPI';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [nameInput, setNameInput] = useState({
    filters:
      {
        filterByName: {
          name: '',
        },
      },
  });
  const [filteredByValues, setFilteredByValues] = useState([]);
  const [columnSelected, setColumnSelected] = useState([]);
  const [comparisonSelected, setComparisonSelected] = useState([]);
  const [valueToBeCompared, setValueToBeCompared] = useState([]);
  const [columnSelected2, setColumnSelected2] = useState([]);
  const [comparisonSelected2, setComparisonSelected2] = useState([]);
  const [valueToBeCompared2, setValueToBeCompared2] = useState([]);
  const [filteredByValues2, setFilteredByValues2] = useState([]);
  const [filteredByName, setFilteredByName] = useState([]);
  const [filteredData, setFilteredData] = useState(filteredByName);
  const [firstFilter, setFirstFilter] = useState([]);
  const [secondFilter, setSecondFilter] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [orderedList, setOrderedList] = useState([]);
  const [order, setOrder] = useState('ASC');
  const [orderColumn, setOrderColumn] = useState('name');

  useEffect(() => {
    const menosUm = -1;
    if ((order === 'ASC') && (orderColumn === 'name')) {
      const newListAsc = [...filteredData];
      newListAsc.sort((a, b) => {
        if (a[orderColumn] > b[orderColumn]) { return 1; }
        if (b[orderColumn] > a[orderColumn]) { return menosUm; } return 0;
      });
      setOrderedList(newListAsc);
    }
  }, [filteredData, order, orderColumn]);

  useEffect(() => {
    const menosUm = -1;
    if ((order === 'DESC') && (orderColumn === 'name')) {
      const newListAsc = [...filteredData];
      newListAsc.sort((a, b) => {
        if (a[orderColumn] < b[orderColumn]) { return 1; }
        if (b[orderColumn] < a[orderColumn]) { return menosUm; } return 0;
      });
      setOrderedList(newListAsc);
    }
  }, [filteredData, order, orderColumn]);

  useEffect(() => {
    if ((order === 'ASC') && (orderColumn !== 'name')) {
      const newListAsc = [...filteredData];
      newListAsc.sort((a, b) => (a[orderColumn] - b[orderColumn]));
      setOrderedList(newListAsc);
    }
  }, [filteredData, order, orderColumn]);

  useEffect(() => {
    if ((order === 'DESC') && (orderColumn !== 'name')) {
      const newListAsc = [...filteredData];
      newListAsc.sort((a, b) => (b[orderColumn] - a[orderColumn]));
      setOrderedList(newListAsc);
    }
  }, [filteredData, order, orderColumn]);

  const handleClick = () => {
    if (filteredByValues.length === 0) {
      setFilteredByValues([{
        column: columnSelected,
        comparison: comparisonSelected,
        value: valueToBeCompared,
      }]);
    } else {
      setFilteredByValues2([{
        column: columnSelected2,
        comparison: comparisonSelected2,
        value: valueToBeCompared2,
      }]);
    }
  };

  useEffect(() => {
    setFiltered(data.filter((planet) => {
      if (comparisonSelected === 'maior que') {
        return Number(planet[columnSelected]) > Number(valueToBeCompared);
      } if (comparisonSelected === 'menor que') {
        return Number(planet[columnSelected]) < Number(valueToBeCompared);
      } return Number(planet[columnSelected]) === Number(valueToBeCompared);
    }));
  }, [data, comparisonSelected, columnSelected, valueToBeCompared]);

  useEffect(() => {
    if (filteredByValues.length > 0) {
      setFilteredData(filtered);
      setFirstFilter(`${columnSelected} ${comparisonSelected} ${valueToBeCompared}`);
    } if (filteredByValues2.length > 0) {
      const filtered2 = filtered.filter((planet) => {
        if (comparisonSelected2 === 'maior que') {
          return Number(planet[columnSelected2]) > Number(valueToBeCompared2);
        } if (comparisonSelected2 === 'menor que') {
          return Number(planet[columnSelected2]) < Number(valueToBeCompared2);
        } return Number(planet[columnSelected2]) === Number(valueToBeCompared2);
      });
      setSecondFilter(`${columnSelected2} ${comparisonSelected2} ${valueToBeCompared2}`);
      setFilteredData(filtered2);
    } else if (filteredByValues.length === 0 && filteredByValues2.length === 0) {
      setFilteredData(filteredByName);
    }
  }, [data, comparisonSelected, columnSelected, valueToBeCompared, filteredByName,
    columnSelected2, comparisonSelected2, valueToBeCompared2, filteredByValues,
    filteredByValues2, filtered]);

  useEffect(() => {
    const fetch = async () => {
      const planetsData = await fetchAPI();
      setData(planetsData);
    };
    fetch();
  }, []); // Recebe os dados da API quando o componente é montado e salva no estado.

  useEffect(() => {
    setFilteredByName(data); // Salva os dados no array de planetas filtrados pelo nome.
    if (nameInput.filters.filterByName.name !== '') { // Se o input for diferente de vazio
      const result = data.filter( // result será igual a data filtrado
        (planet) => planet.name.toLowerCase() // muda os nomes para minúsculo e retorna os planetas
          .includes(nameInput.filters.filterByName.name), // que contenham as letras digitados no input
      );
      setFilteredByName(result); // seta os planetas filtrados em filteredByName
    }
  }, [nameInput, data]); //

  const contextValue = {
    setNameInput,
    setComparisonSelected,
    setValueToBeCompared,
    secondFilter,
    handleClick,
    firstFilter,
    setFirstFilter,
    setSecondFilter,
    setFilteredByValues,
    setFilteredByValues2,
    columnSelected,
    comparisonSelected,
    setColumnSelected,
    setColumnSelected2,
    setComparisonSelected2,
    setValueToBeCompared2,
    orderedList,
    setOrder,
    setOrderColumn,
  };

  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
