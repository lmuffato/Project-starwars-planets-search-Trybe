import React from 'react';
import { object } from 'prop-types';

// este component button precisa receber obrigatoriamente 3 parametros (tex, dataTestid, funcHandleClick)
function Buttons({ params }) {
  const { text, dataTestid, funcHandleClick } = params;

  return (
    <button
      type="button"
      className="btn"
      data-testid={ dataTestid }
      onClick={ funcHandleClick }
    >
      {text}
    </button>
  );
}

Buttons.propTypes = {
  params: object,
}.isRequired;

export default Buttons;
