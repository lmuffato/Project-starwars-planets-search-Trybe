import React, { useContext, useEffect } from 'react';
import { Input } from 'semantic-ui-react';
import PlanetsContext from '../context/ContextPlanets';

function FiltersHeader() {
  // Início da gambiarra para passar no teste (inserir testid no input)

  const datatest = () => {
    const nameFilter = document.getElementById('name-filter');
    nameFilter.setAttribute('data-testid', 'name-filter');
  };
  useEffect(() => {
    (
      datatest
    )();
  }, []);

  // Fim da gambiarra para passar no teste

  const {
    filters: { filterByName },
    setFilterByName,
    planetsFound } = useContext(PlanetsContext);
  const { name } = filterByName;
  return (
    (!planetsFound) && (name.length > 1) ? <Input
      error
      size="small"
      style={ { width: 500 } }
      icon="search"
      placeholder="Pesquisar planeta"
      onChange={ setFilterByName }
      value={ name }
      id="name-filter"
    /> : (
      <Input
        size="small"
        style={ { width: 500 } }
        icon="search"
        placeholder="Pesquisar planeta"
        onChange={ setFilterByName }
        value={ name }
        id="name-filter"
      />
    )
  );
}

export default FiltersHeader;
