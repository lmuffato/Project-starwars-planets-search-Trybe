import React from 'react';
// Botão básico e mudo, caso necessário

function Button({ ...props }) {
  return <button type="submit" { ...props } />;
}

export default Button;
