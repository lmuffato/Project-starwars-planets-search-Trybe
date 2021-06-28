import React from 'react';

function ClearFilterButton() {
  return (
    <div className="inline scifiUI">
      <button
        type="button"
        data-testid="delete-btn"
        onClick={ console.log('click!') }
      >
        X
      </button>
    </div>
  );
}

export default ClearFilterButton;
