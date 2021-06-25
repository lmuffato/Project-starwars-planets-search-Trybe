import React, { useContext } from 'react';
import context from '../store/Context';

function Thead() {
  const { keys } = useContext(context);
  return (
    <thead>
      <tr>
        {keys
          .filter((key) => key !== 'residents')
          .map((key) => <th key={ key }>{key}</th>)}
      </tr>
    </thead>
  );
}

export default Thead;
