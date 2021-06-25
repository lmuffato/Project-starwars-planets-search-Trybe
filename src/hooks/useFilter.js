import { useContext } from 'react';
import { FiltersContext } from '../Contexts/FiltersContextProvider';

function useFilter() {
  const value = useContext(FiltersContext);
  return value;
}

export default useFilter;
