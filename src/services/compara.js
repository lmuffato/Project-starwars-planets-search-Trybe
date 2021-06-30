function compara(arrayValue, operator, filterValue) {
  let result = false;
  switch (operator) {
  case 'maior que':
    result = parseFloat(arrayValue) > parseFloat(filterValue);
    break;
  case 'menor que':
    result = parseFloat(arrayValue) < parseFloat(filterValue);
    break;
  case 'igual a':
    result = arrayValue === filterValue;
    break;
  default:
    result = false;
  }
  return result;
}

export default compara;
