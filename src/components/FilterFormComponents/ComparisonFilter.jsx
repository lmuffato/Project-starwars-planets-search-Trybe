import React from 'react';

export default function ComparisonFilter() {
  return (
    <label htmlFor="comparison-filter">
      <select id="comparison-filter" data-testid="comparison-filter">
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
    </label>
  );
}
