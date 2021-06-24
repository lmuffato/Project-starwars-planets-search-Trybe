import React from 'react';
import useStarWars from '../hooks/useStarWars';

function TableBody() {
  const { data } = useStarWars();

  return (
    <tbody>
      {data.length > 0
        ? data.map((StarWarsPlanet) => (
          <tr key={ StarWarsPlanet }>
            {Object.values(StarWarsPlanet).map((val) => (<td key={ val }>{val}</td>))}
          </tr>
        ))
        : ''}
    </tbody>
  );
}

export default TableBody;
