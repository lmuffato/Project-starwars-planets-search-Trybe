export function sortString(data, order) {
  const ONE_LESS = -1;

  if (order.sort === 'ASC') {
    data.sort((a, b) => {
      if ((a[order.column]) > (b[order.column])) return 1;
      if ((a[order.column]) < (b[order.column])) return ONE_LESS;
      return 0;
    });
  } else {
    data.sort((a, b) => {
      if ((a[order.column]) > (b[order.column])) return ONE_LESS;
      if ((a[order.column]) < (b[order.column])) return 1;
      return 0;
    });
  }
}
export function sortNumber(data, order) {
  if (order.sort === 'ASC') {
    console.log(order.sort);
    data.sort((a, b) => Number(a[order.column]) - Number(b[order.column]));
  } else {
    console.log(order.sort);
    data.sort((a, b) => Number(b[order.column]) - Number(a[order.column]));
  }
}
