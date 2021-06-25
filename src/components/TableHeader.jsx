import React, { useState, useEffect } from 'react';
import { getPlanets } from '../services/getPlanets';
import './TableHeader.css';

function TableHeader() {
  const [planets, setPlanets] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const setThePlanets = async () => {
      const thePlanets = await getPlanets();
      setPlanets([...thePlanets]);
      setLoading(false);
    }
    setThePlanets();
  }, []);

  const renderTableHeader = () => {
    const headers = Object.keys(planets[0]);
    console.log(headers);
    return (
      headers.map((ele) => (
        <th className="tableHeader">
          { ele }
        </th>
      ))
    );
  }

  return (
    <tr>
      { isLoading ? <h1>Loading...</h1> : renderTableHeader() }
    </tr>
  )
}

export default TableHeader
