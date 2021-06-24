import React, { useEffect, useContext } from 'react';
import starWarsPlanets from '../../context';

function GetData() {
  const { setData, setBackup } = useContext(starWarsPlanets);

  useEffect(() => {
    const getPlanets = async () => {
      const { results } = await fetch('https://swapi-trybe.herokuapp.com/api/planets/')
        .then((data) => data.json());

      setData(results);
      setBackup(results);
    };

    getPlanets();
  }, []);

  return (<span>Hello</span>);
}

export default GetData;
