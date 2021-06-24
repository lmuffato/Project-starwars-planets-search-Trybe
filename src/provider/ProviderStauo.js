import React, { useEffect, useState } from 'react';
import { object } from 'prop-types';
import ContextStauo from './ContextStauo';
import getApiStauo from '../services/fetchApiStauo';

function Provider({ children }) {
  const initial = {
    filterByName: {
      name: '',
    },
  };

  const [data, setData] = useState([]);
  const [dataTitle, setDataTitle] = useState([]);
  const [text, setText] = useState('');
  const [filters, setFilters] = useState(initial);

  const respApi = async () => {
    const results = await getApiStauo();
    setData(results);
    setDataTitle(results);
  };

  useEffect(() => {
    respApi();
  }, []);

  const context = {
    data,
    dataTitle,
    setData,
    text,
    setText,
    filters,
    setFilters,
  };

  return (
    <ContextStauo.Provider value={ context }>
      { children }
    </ContextStauo.Provider>
  );
}

Provider.propTypes = {
  children: object,
}.isRequired;

export default Provider;
