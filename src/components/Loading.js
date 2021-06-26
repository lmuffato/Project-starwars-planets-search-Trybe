import React, {
  // useEffect,
  useContext,
} from 'react';
import logo from '../images/starwars-logo.svg';
import sabre from '../images/PngItem_4987699.png';
import { data } from '../contexts/starWars';
import '../css/Loading.css';

export default function Loading() {
  // const TIMEOUT = 3000;
  const {
    isLoading,
    // setLoading
  } = useContext(data);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, TIMEOUT);
  // });
  return (
    <div className="loading-container">
      <div className={ isLoading ? 'loading-content active' : 'loading-content' }>
        <img className="loading-logo" src={ logo } alt="" />
        <img className="loading-sabre" src={ sabre } alt="" />
      </div>
    </div>
  );
}
