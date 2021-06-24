export const filterByName = (array, name) => {
  const filteredArrayByName = array.filter((item) => item.name.includes(name));
  return filteredArrayByName;
};

const isGreatherThan = (array, category, value) => (
  array.filter((item) => item[category] > value)
);

const isLessThan = (array, category, value) => (
  array.filter((item) => item[category] < value)
);

const isEqualTo = (array, category, value) => (
  array.filter((item) => Number(item[category]) === value)
);

export const filterByNum = (array, { value, category, comparison }) => {
  const filters = {
    'maior que': isGreatherThan(array, category, Number(value)),
    'menor que': isLessThan(array, category, Number(value)),
    'igual a': isEqualTo(array, category, Number(value)),
  };

  return filters[comparison];
};
