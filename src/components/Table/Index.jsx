import React, { useContext } from 'react';
import StarWarsContext from '../../Context/StarWarsContext';
import BodyTable from './BodyTable';
import Header from './Header';

const Table = () => {
  const { data, isFetching } = useContext(StarWarsContext);
  return !isFetching ? (
    <table border="2" cellSpacing="0px" cellPadding="5px">
      <thead>
        <Header data={ data } />
      </thead>
      <tbody>
        <BodyTable data={ data } />
      </tbody>
    </table>

  ) : <span>Carregando ...</span>;
};

export default Table;
