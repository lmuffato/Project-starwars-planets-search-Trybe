import { useContext } from 'react';
import { StarWarsContextt } from '../store/contexts/StarWarsContext';

export default function useStarWars() {
  const value = useContext(StarWarsContextt);
  return value;
}
