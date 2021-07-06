// const objeto = {
//   filters:
//     {
//       filterByName: {
//         name: '',
//       },
//       filterByNumericValues: [
//         {
//           column: 'population',
//           comparison: 'maior que',
//           value: '100000',
//         },
//       ],
//     },
// };

// console.log(objeto.filters.filterByName.name); // name
// console.log(objeto.filters.filterByNumericValues[0].column); // population
// console.log(objeto.filters.filterByNumericValues[0].comparison); // maior que
// console.log(objeto.filters.filterByNumericValues[0].value); // maior que

// const novoArray = {
//   column: 'diameter',
//   comparison: 'menor que',
//   value: '500000',
// };

// console.log(objeto.filters.filterByNumericValues.concat(novoArray));

// const objetoVazio = {
//   filters:
//     {
//       filterByName: {
//         name: '',
//       },
//       filterByNumericValues: [
//         {
//           column: 'population',
//           comparison: 'maior que',
//           value: '100000',
//         },
//       ],
//     },
// };

const filterByNumericValues = [
  {
    column: 'population',
    comparison: 'maior que',
    value: '100000',
  },
];

const [ column ] = filterByNumericValues;

console.log([0])