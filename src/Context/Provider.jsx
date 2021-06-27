import React, { useState } from 'react';
import PropTypes from 'prop-types';

import MyContext from './MyContext';

function Provider({ children }) {
  const [nickName, setNickName] = useState('V');
  const [data, setData] = useState([]);
  const [name, setFilterName] = useState('');
  const [newData, setNewData] = useState([]);
  const values = { nickName,
    setNickName,
    data,
    setData,
    filter: { filterByName: { name } },
    setFilterName,
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
