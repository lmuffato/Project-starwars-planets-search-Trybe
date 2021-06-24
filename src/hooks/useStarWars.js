import { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsContext';

export default function useStarWars() {
  const value = useContext(StarWarsContext);
  return value;
}
