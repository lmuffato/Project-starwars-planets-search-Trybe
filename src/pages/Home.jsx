import React from 'react';
import Input from '../components/Input';
import Select from '../components/Select';
import Table from '../components/Table';
import useStarWars from '../hooks/useStarWars';

function Home() {
  const { inputValue, setInputValue } = useStarWars();
  const options = ['test1', 'test2', 'test3'];
  // console.log(inputValue);

  return (
    <>
      <Input
        type="text"
        placeholder="Digite o nome do planeta"
        data-testid="name-filter"
        onChange={ (event) => setInputValue(event.target.value) }
        value={ inputValue }
      />
      <div className="filter-panel">
        <Select options={ options } value=" " placeholder="Select an option" />
      </div>
      <main>
        <Table />
      </main>
    </>
  );
}

export default Home;
