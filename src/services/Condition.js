function is(planet, filterByNumericValues) {
  if (filterByNumericValues[0].comparison === 'maior que') {
    return Number(planet[filterByNumericValues[0].column])
        > Number(filterByNumericValues[0].value);
  }
  if (filterByNumericValues[0].comparison === 'menor que') {
    return Number(planet[filterByNumericValues[0].column])
        < Number(filterByNumericValues[0].value);
  }
  if (filterByNumericValues[0].comparison === 'igual a') {
    return Number(planet[filterByNumericValues[0].column])
      === Number(filterByNumericValues[0].value);
  }
  return planet;
}

export default is;
