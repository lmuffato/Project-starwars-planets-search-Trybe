import React, { useContext } from 'react';
import context from '../store/Context';
import '../style/Table.css';
import Formfilter from './Formfilter';
import Tbody from './Tbody';
import Thead from './Thead';

function Table() {
  const { filter: { filteredByName }, setFilter } = useContext(context);

  const handleChange = ({ target }) => {
    setFilter({ filteredByName: target.value });
  };
  return (
    <div>
      <section>
        <label htmlFor="nameInput">
          { 'Name ' }
          <input
            data-testid="name-filter"
            type="text"
            name="nameInput"
            onChange={ handleChange }
            value={ filteredByName }
          />
        </label>
      </section>
      <Formfilter />
      <table className="table">
        <Thead />
        <Tbody />
      </table>
    </div>
  );
}

export default Table;
