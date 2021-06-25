const handleFilter = (data, method) => {
  const filters = Object.values(method);
  const key = Object.keys(method);

  return filters.reduce((acc, currFilter, index) => acc.filter((item) => {
    switch (currFilter[0]) {
    case '>':
      return item[key[index]] > parseInt(currFilter.slice(1), 10);
    case '<':
      return item[key[index]] < parseInt(currFilter.slice(1), 10);
    default:
      return item[key[index]].includes(currFilter);
    }
  }), data);
};

export default handleFilter;
