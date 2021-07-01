// import React, { useContext, useEffect } from 'react';
// import PlanetContext from '../context/PlanetContext';

// import './tableHeader.css';

// function InputTextFilter() {
//   const {
//     planetsList,
//     setPlanetsList,
//     planetsFiltred,
//     setPlanetsFiltred,
//     tableColumns,
//     setTableColumns,
//     inputText,
//     setInputText,
//   } = useContext(PlanetContext);

//   useEffect(() => {
//   }, []);

//   if (inputText === undefined || inputText.length === 0 || inputText === '') {
//     setPlanetsFiltred(planetsList);
//   } else {
//     setPlanetsFiltred(
//       planetsList.filter((planets) => planets.name.includes(inputText))
//     );
//   }

//   return (
//     <span>
//       <input
//         type="text"
//         data-testid="name-filter"
//         value={ inputText }
//         onChange={ (event) => setInputText(event.target.value) }
//       />
//     </span>
//   );
// }

// export default InputTextFilter;
