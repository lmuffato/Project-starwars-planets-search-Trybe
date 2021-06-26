const comparisonSwitch = (planet, column, comparison, value) => {
  switch (comparison) {
  case 'maior que':
    return planet[column] > Number(value);
  case 'menor que':
    return planet[column] < Number(value);
  case 'igual a':
    return planet[column] === value;
  default:
    return false;
  }
};

export default comparisonSwitch;
