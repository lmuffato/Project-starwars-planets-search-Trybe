import { useContext } from 'react';
import Context from '../context/Context';

export default function usePlanets() {
  const { data } = useContext(Context);

  return data;
}
