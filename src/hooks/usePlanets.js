import { useContext } from 'react';
import { PlanetsContext } from '../Contexts/PlanetsContextProvider';

function usePlanets() {
  const value = useContext(PlanetsContext);
  return value;
}

export default usePlanets;
