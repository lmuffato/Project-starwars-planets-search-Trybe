import React from 'react';
import SWContext from './SWContext';

function SWProvider({ children }) {
  const [value, setValue] = useState(false);
  // const [redCar, setRedCar] = useState(false);
  // const [yellowCar, setYellowCar] = useState(false);

  // function moveCar(car, side) {
  //   switch (car) {
  //   case 'redCar':
  //     setRedCar(side);
  //     break;
  //   case 'blueCar':
  //     setBlueCar(side);
  //     break;
  //   case 'yellowCar':
  //     setYellowCar(side);
  //     break;
  //   default:
  //     break;
  //   }
  // }

  return (
    <SWContext.Provider value={ { value, setValue } }>
      {children}
    </SWContext.Provider>
  );
}

export default SWProvider;
