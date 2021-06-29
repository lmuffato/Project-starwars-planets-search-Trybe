export const addNewNumValueFilter = (setter, state) => (
  { column, comparison, value },
) => {
  setter({
    ...state,
    filterByNumericValue: [
      ...state.filterByNumericValue,
      { column, comparison, value },
    ],
  });
};
export const removeNumValueFilter = (setter, state) => (columnToRemove) => {
  setter({
    ...state,
    filterByNumericValue: state.filterByNumericValue.filter(
      ({ column }) => column !== columnToRemove,
    ),
  });
};
export const sortBy = (setter, state) => ({ column, sort }) => {
  setter({ ...state, order: { column, sort } });
};
