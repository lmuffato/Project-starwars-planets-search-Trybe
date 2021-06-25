import React from 'react';
import Input from '../components/Input';
import Table from '../components/Table';
import ControlPanel from '../components/FiltersControlPanel';
import useStarWars from '../hooks/useStarWars';
import SortPanel from '../components/SortPanel';

function Home() {
  const { filteredPlanets } = useStarWars();

  return (
    <>
      <Input
        type="text"
        placeholder="Digite o nome do planeta"
        data-testid="name-filter"
        onChange={ (event) => filteredPlanets(event.target.value) }
      />
      <ControlPanel />
      <SortPanel />
      <main>
        <Table />
      </main>
    </>
  );
}

export default Home;
