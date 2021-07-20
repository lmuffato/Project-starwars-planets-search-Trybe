function FilterNumeric(arrayValue, comparison, value) {
  let result = false;
  switch (comparison) {
  case 'maior que':
    result = parseFloat(arrayValue) > parseFloat(value);
    break;
  case 'menor que':
    result = parseFloat(arrayValue) < parseFloat(value);
    break;
  case 'igual a':
    result = arrayValue === value;
    break;
  default:
    result = false;
  }
  return result;
}

export default FilterNumeric;
