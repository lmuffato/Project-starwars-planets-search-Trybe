import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';

function PlanetProvider({ children }) {
  const [planetsList, setPlanetsList] = useState([]);
  const [planetsFiltred, setPlanetsFiltred] = useState([]);
  const [tableColumns, setTableColumns] = useState([]);
  const [inputText, setInputText] = useState('');

  return (
    <main>
      <PlanetContext.Provider
        value={ {
          planetsList,
          setPlanetsList,
          planetsFiltred,
          setPlanetsFiltred,
          tableColumns,
          setTableColumns,
          inputText,
          setInputText,
        } }
      >
        {children}
      </PlanetContext.Provider>
    </main>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.object,
}.isRequired;

export default PlanetProvider;
