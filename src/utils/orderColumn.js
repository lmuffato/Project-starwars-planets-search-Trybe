function orderedAsc(planetsArray, columnName) {
  const number = -1;
  return planetsArray.sort((a, b) => {
    if (a[columnName] > b[columnName]) {
      return 1;
    }
    if (a[columnName] < b[columnName]) {
      return number;
    }
    return 0;
  });
}

function orderedDesc(planetsArray, columnName) {
  const number = -1;
  return planetsArray.sort((b, a) => {
    if (a[columnName] < b[columnName]) {
      return number;
    }
    if (a[columnName] > b[columnName]) {
      return 1;
    }
    return 0;
  });
}

function orderedTypeString(planetsArray, columnName, order) {
  if (order === 'ASC') {
    orderedAsc(planetsArray, columnName);
  } else {
    orderedDesc(planetsArray, columnName);
  }
}

function orderedTypeNumber(planetsArray, columnName, order) {
  if (order === 'ASC') {
    planetsArray.sort((a, b) => a[columnName] - b[columnName]);
  } else {
    planetsArray.sort((b, a) => a[columnName] - b[columnName]);
  }
}

function orderColumn(planets, orderType, columnName) {
  if (typeof (planets[0][columnName]) === 'string') {
    orderedTypeString(planets, columnName, orderType);
  } else {
    orderedTypeNumber(planets, columnName, orderType);
  }
}

export default orderColumn;
