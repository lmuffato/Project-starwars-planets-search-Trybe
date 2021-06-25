import { useContext } from 'react';
import Context from '../context/Context';

export default function useFilters() {
  const { filters, setFilters } = useContext(Context);

  return { filters, setFilters };
}
