import React from 'react';
// Verificar componentização para inputs, ver melhor estratégia. Teremos
// pelo menos dois tipos de input: tipo text e tipo checked.

function Input({ ...props }) {
  return (
    <input { ...props } />
  );
}

export default Input;

/*
  switch (comparisonType) {
        case 'maior que':
          filteredArr = filteredArr.filter((sPlanet) => (
            Number(sPlanet[column]) > Number(value)));
          break;
        case 'menor que':
          filteredArr = filteredArr.filter((sPlanet) => (
            Number(sPlanet[column] < Number(value))));
          break;
        case 'igual a':
          filteredArr = filteredArr.filter((sPlanet) => (
            Number(sPlanet[column] === Number(value))));
          break;
        default:
          console.log('help');
        }
*/
