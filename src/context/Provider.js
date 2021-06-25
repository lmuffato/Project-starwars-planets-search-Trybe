import React, { useState, useEffect } from 'react';
import requestAPI from '../services/requestAPI';
import context from './context';
import PropTypes from 'prop-types'

const Provider = ({ children }) => {
  const [data, setData] = useState([]);

  const contextValue = {
    data, 
    setData,
  }

  useEffect(() => {
    requestAPI().then(({ results }) => setData(results))
  }, [])   

  return (    
    <context.Provider value={contextValue}>
      {children};
    </context.Provider>
  )

}

Provider.propTypes = {
  children: PropTypes.node.isRequired, //Segundo dica do coruja no plantão de revisão;
}

export default Provider;