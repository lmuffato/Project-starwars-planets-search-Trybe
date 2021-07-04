import React, { useContext } from 'react';
// Todos os lugares que eu importar meu Context (SWContext)
// receberão as informações dos estados: Linha abaixo!
import SWContext from '../Context/SWContext';

function SWPesquisa() {
  // Entendi que a constante "name" é uma exigência do Readme
  const { name, setinputNome } = useContext(SWContext);

  return (
    <div>
      <form>
        <label htmlFor="inputNome">
          Pesquisa por nome:
          {/* Código da linha abaixo usado para dar espaço */}
          {' '}
          <input
            type="text"
            id="inputNome"
            value={ name }
            onChange={ ({ target: { value } }) => setinputNome(value) }
            data-testid="name-filter"
          />
        </label>
      </form>
    </div>
  );
}

export default SWPesquisa;
