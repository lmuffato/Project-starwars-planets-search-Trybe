const handleFilter = (arrayObjects, method) => {
  if (typeof method !== 'object' || method.length === 0) return arrayObjects;

  const filters = Object.values(method);
  const key = Object.keys(method);

  return filters.reduce((acc, currFilter, index) => acc.filter((object) => {
    const integerObjectKeyValue = parseInt(object[key[index]], 10);
    const integerNumberFilter = parseInt(currFilter.slice(1), 10);

    switch (currFilter[0]) {
    case '>':
      return integerObjectKeyValue > integerNumberFilter;
    case '<':
      return integerObjectKeyValue < integerNumberFilter;
    case '=': {
      return integerObjectKeyValue === integerNumberFilter;
    }
    default: {
      if (!object[key[index]]) return arrayObjects;
      return (object[key[index]].toLowerCase().includes(currFilter.toLowerCase()));
    }
    }
  }), arrayObjects);
};

export default handleFilter;
