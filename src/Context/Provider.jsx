import React, { useState } from 'react';
import PropTypes from 'prop-types';

import MyContext from './MyContext';

function Provider({ children }) {
  const [nickName, setNickName] = useState('V');
  const [data, setData] = useState([]);
  const [name, setFilterName] = useState('');
  const [newData, setNewData] = useState([]);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('0');
  const [filter, setFilter] = useState(false);
  const values = {
    nickName,
    setNickName,
    data,
    setData,
    filters: {
      filterByName: { name },
      filterByNumericValues: [
        {
          column,
          comparison,
          value,
        },
      ],
    },
    setFilterName,
    setColumn,
    setComparison,
    setValue,
    filter,
    setFilter,
    newData,
    setNewData };
  return (
    <MyContext.Provider value={ values }>
      { children }
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
