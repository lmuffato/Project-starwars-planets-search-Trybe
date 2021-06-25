import { useContext } from 'react';
import Context from '../context/Context';

export default function usePlanets() {
  return useContext(Context).data;
}
