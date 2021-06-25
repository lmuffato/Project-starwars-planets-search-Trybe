import React from 'react';
import Input from '../components/Input';
import Table from '../components/Table';
import ControlPanel from '../components/ControlPanel';
import useStarWars from '../hooks/useStarWars';

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
      <main>
        <Table />
      </main>
    </>
  );
}

export default Home;
