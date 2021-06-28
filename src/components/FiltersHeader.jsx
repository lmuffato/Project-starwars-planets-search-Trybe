import React, { useContext, useEffect } from 'react';
import { Input, Label } from 'semantic-ui-react';
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
    <header>
      {planetsFound ? <Input
        size="small"
        icon="search"
        placeholder="Pesquisar planeta"
        onChange={ setFilterByName }
        value={ name }
        id="name-filter"
      /> : (
        <>
          <Input
            error
            size="small"
            icon="search"
            placeholder="Pesquisar planeta"
            onChange={ setFilterByName }
            value={ name }
            id="name-filter"
          />
          <Label basic color="red" pointing="left">
            Nenhum planeta encontrado!
          </Label>
        </>
      )}
    </header>
  );
}

export default FiltersHeader;
