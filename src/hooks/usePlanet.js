import { useContext } from 'react';
import PlanetsContext from '../utils/PlanetsContext/PlanetsContext';

const usePlanet = () => useContext(PlanetsContext);

export default usePlanet;
