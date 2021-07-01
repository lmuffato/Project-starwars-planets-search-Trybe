import React from 'react';

export default function Filters() {
  return (
    <div>
      <label htmlFor="name-filter">
        Name Filter:
        <input id="name-filter" data-testid="name-filter" />
      </label>
      <h1>Numero</h1>
    </div>
  );
}
