import React, { useContext } from 'react';
import { Button, Label } from 'semantic-ui-react';
import PlanetsContext from '../context/ContextPlanets';

function ActiveFilters() {
  const { activeFilters } = useContext(PlanetsContext);
  return (
    <Label.Group>
      {activeFilters.map((filter) => (
        <Label key={ filter } data-testid="filter" style={ { padding: 0 } }>
          <Label>
            {filter}
          </Label>
          <Label.Detail>
            <Button
              id="x-button"
              color="red"
              style={ {
                padding: 0,
                margin: 0,
              } }
            >
              X
            </Button>
          </Label.Detail>
        </Label>
      ))}
    </Label.Group>
  );
}

export default ActiveFilters;
