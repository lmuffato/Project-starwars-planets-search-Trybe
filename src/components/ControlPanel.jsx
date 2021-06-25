import React from 'react';
import Button from './Button';
import Input from './Input';
import Select from './Select';

function ControlPanel() {
  const optionsComparison = [
    { value: 'maior que', label: 'maior que' },
    { value: 'menor que', label: 'menor que' },
    { value: 'igual a', label: 'igual a' },
  ];

  const optionsColumn = [
    { value: 'population', label: 'population' },
    { value: 'orbital_period', label: 'orbital_period' },
    { value: 'diameter', label: 'diameter' },
    { value: 'rotation_period', label: 'rotation_period' },
    { value: 'surface_water', label: 'surface_water' },
  ];

  return (
    <div className="control-panel">
      <div className="filter-panel">
        <Select
          dataTestid="column-filter"
          options={ optionsColumn }
          placeholder="Selecione uma opção"
        />
        <Select
          options={ optionsComparison }
          dataTestid="comparison-filter"
          placeholder="Selecione uma opção"
        />
        <Input
          data-testid="value-filter"
          type="number"
          placeholder="Digite um valor"
        />
        <Button data-testid="button-filter">Adicionar filtros</Button>
      </div>
    </div>
  );
}

export default ControlPanel;
