import React from 'react';

export default function NameFilter() {
  return (
    <div>
      <label htmlFor="name-filter">
        Name Filter:
        <input id="name-filter" data-testid="name-filter" />
      </label>
    </div>
  );
}
