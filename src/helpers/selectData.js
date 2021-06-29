export function selectReducer(state, { type, payload }) {
  switch (type) {
  case 'column':
    return { ...state, column: payload };
  case 'comparison':
    return { ...state, comparison: payload };
  case 'findByValue':
    return { ...state, findByValue: payload };
  default:
    return state;
  }
}

export const selects = [
  {
    name: 'column',
    dataTestid: 'column-filter',
    options: [
      {
        text: 'population',
        value: 'population',
      },
      {
        text: 'orbital_period',
        value: 'orbital_period',
      },
      {
        text: 'diameter',
        value: 'diameter',
      },
      {
        text: 'rotation_period',
        value: 'rotation_period',
      },
      {
        text: 'surface_water',
        value: 'surface_water',
      },
    ],
  },
  {
    name: 'comparison',
    dataTestid: 'comparison-filter',
    options: [
      {
        text: 'maior que',
        value: 'maior que',
      },
      {
        text: 'menor que',
        value: 'menor que',
      },
      {
        text: 'igual a',
        value: 'igual a',
      },
    ],
  },
];
