const checkNaN = (value) => Number.isNaN(Number(value));

const getSortStructure = (a, b, colum) => {
  const sortNumber = -1;

  const checkValue = checkNaN(a[colum]);

  const aValue = checkValue ? a[colum] : Number(a[colum]);
  const bValue = checkValue ? b[colum] : Number(b[colum]);

  return { sortNumber, aValue, bValue };
};

const sortASC = (a, b, colum) => {
  const { aValue, bValue, sortNumber } = getSortStructure(a, b, colum);

  if (aValue > bValue) return 1;
  if (bValue > aValue) return sortNumber;
  return 0;
};

const sortDSC = (a, b, colum) => {
  const { aValue, bValue, sortNumber } = getSortStructure(a, b, colum);

  if (aValue > bValue) return sortNumber;
  if (bValue > aValue) return 1;
  return 0;
};

const sortPlanets = (planets, { column, sort }) => {
  const toLowerColumn = column.toLowerCase();

  const getSort = {
    ASC: [...planets].sort((a, b) => sortASC(a, b, toLowerColumn)),
    DSC: [...planets].sort((a, b) => sortDSC(a, b, toLowerColumn)),
  };

  return getSort[sort];
};

export default sortPlanets;
