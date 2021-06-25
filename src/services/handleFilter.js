const handleFilter = (arrayObjects, method) => {
  if (typeof method !== 'object' || method.length === 0) return arrayObjects;

  const filters = Object.values(method);
  const key = Object.keys(method);
  console.log(filters, key);

  return filters.reduce((acc, currFilter, index) => acc.filter((object) => {
    switch (currFilter[0]) {
    case '>':
      return object[key[index]] > parseInt(currFilter.slice(1), 10);
    case '<':
      return object[key[index]] < parseInt(currFilter.slice(1), 10);
    default: {
      return (object[key[index]].toLowerCase().includes(currFilter.toLowerCase()));
    }
    }
  }), arrayObjects);
};

export default handleFilter;
