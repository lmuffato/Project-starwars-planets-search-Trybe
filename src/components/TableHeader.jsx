import React, { useState, useEffect, useContext } from 'react';
import context from '../context/context';
import './TableHeader.css';

function TableHeader() {
  const { planets, isLoading } = useContext(context);

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
