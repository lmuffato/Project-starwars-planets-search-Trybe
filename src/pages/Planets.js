import React, { useContext } from 'react';
import NameFilterInput from '../components/NameFilterInput';
import InitialPlanets from '../components/InitialPlanets';
import TableHeader from '../components/TableHeader';
import FilteredPlanets from '../components/FilteredPlanets';
import PlanetsContext from '../context/PlanetsContext';

export default function Planets() {
  const { filters } = useContext(PlanetsContext);
  const { name } = filters.filterByName;

  return (
    <>
      <NameFilterInput />
      <table>
        <TableHeader />
        {name === ''
          ? <InitialPlanets />
          : <FilteredPlanets />}
      </table>
    </>
  );
}
