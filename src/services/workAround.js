const addValueInAEspecificIndex = (arr, index, value) => (
  [...arr.slice(0, index), value, ...arr.slice(-(arr.length - index))]
);

export const removeSpecificIndex = (arr = [], index = arr.length) => (
  [...arr.slice(0, index), ...arr.slice(index + 1)]
);

export default addValueInAEspecificIndex;
