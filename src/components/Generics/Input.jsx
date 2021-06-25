import React from 'react';
// Verificar componentização para inputs, ver melhor estratégia. Teremos
// pelo menos dois tipos de input: tipo text e tipo checked.

function Input({ ...props }) {
  return <input { ...props } />;
}

export default Input;
