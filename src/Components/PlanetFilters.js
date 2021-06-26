import React, { useContext } from 'react';
import ContextApi from './ContextApi';

function PlanetFilters() {
  const { data, keys } = useContext(ContextApi);
  console.log(data);
  return (
    <div></div>
  )}