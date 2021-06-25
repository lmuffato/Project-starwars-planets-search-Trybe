import React from 'react';
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
        <Select dataTestid="column-filter" options={ optionsColumn } />
        <Select options={ optionsComparison } dataTestid="comparison-filter" />
      </div>
    </div>
  );
}

export default ControlPanel;
