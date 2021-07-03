import React, { useContext } from 'react';
import { Divider } from 'semantic-ui-react';
import FilterByName from './FilterByName';
import FilterByNumeric from './FilterByNumeric';
import ActiveFilters from './ActiveFilters';
import PlanetsContext from '../context/ContextPlanets';

function Header() {
  const { isLoading, activeFilters } = useContext(PlanetsContext);
  if (isLoading) return null;
  return (
    <header>
      <FilterByName />
      <br />
      <FilterByNumeric />
      {activeFilters.length > 0 ? (
        <>
          <Divider />
          <ActiveFilters />
        </>
      ) : null}
    </header>
  );
}

export default Header;
