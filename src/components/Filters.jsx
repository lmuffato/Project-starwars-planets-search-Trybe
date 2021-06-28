import React, { useContext } from 'react';
import Context from '../context/Context';

function Filters() {
  const {
    handleSelectChange,
    handleSubmitFilter,
  } = useContext(Context);
  return (
    <form>
      <select
        data-testid="column-filter"
        name="columnFilter"
        id="column-filter"
        onChange={ handleSelectChange }
      >
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        id="comparison-filter"
        name="comparisonFilter"
        onChange={ handleSelectChange }
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input
        data-testid="value-filter"
        id="value-filter"
        type="number"
        name="valueFilter"
        onChange={ handleSelectChange }
      />
      <button
        data-testid="button-filter"
        id="button-filter"
        type="button"
        onClick={ handleSubmitFilter }
      >
        Buscar
      </button>
      {/* </label> */}
    </form>
  );
}

export default Filters;

// const INITIAL_STATE = {
//   columnFilter: 'population',
//   comparisonFilter: 'maior que',
//   valueFilter: '',
// };
// const { setFilters, filters, filtersValueFunc } = useContext(Context);
// const [tagValue, settagValue] = useState(INITIAL_STATE);
// // console.log(filtersTag);
// // console.log(valueFilter);
// const handleFilters = ({ target: { name, value } }) => {
//   settagValue({
//     ...tagValue,
//     [name]: value,
//   });
// };

// const handleSubmitFilter = () => {
//   setFilters({ ...filters,
//     ...tagValue,
//     filterByNumericValues:
//       {
//         column: tagValue.columnFilter,
//         comparison: tagValue.comparisonFilter,
//         value: tagValue.valueFilter,
//       },
//   });
//   filtersValueFunc();
// };

// const handleSubmitFilter = () => {
//   setFilters({ ...filters,
//     columnFilter: tagValue.columnFilter,
//     comparisonFilter: tagValue.comparisonFilter,
//     valueFilter: tagValue.valueFilter,
//     filterByNumericValues:
//       {
//         column: tagValue.columnFilter,
//         comparison: tagValue.comparisonFilter,
//         value: tagValue.valueFilter,
//       },
//   });
//   filtersValueFunc();
// };
