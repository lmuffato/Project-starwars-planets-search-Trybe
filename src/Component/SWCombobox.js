import React, { useContext, useState } from 'react';
// Todos os lugares que eu importar meu Context (SWContext)
// receberão as informações dos estados: Linha abaixo!
import SWContext from '../Context/SWContext';

// Agradecimento mais que especial para aluna Nathi que tira minha dúvidas
// na hora do sufoco e faz até videochamada pra me explicar com muita paciência

function SWCombobox() {
  // Filtro local criado para receber as alterações do <form> e enviar
  // os dados para o estado global somente depois de clicar no botão
  const [filtroLocal, setFiltroLocal] = useState({});
  const { filtroGlobal, setFiltroGlobal } = useContext(SWContext);

  // "local" recebe as alterações dos selects e do input
  // sendo "name" => column, comparison e value
  // sendo "value" as escolhas do select e o número do input
  const local = ({ target: { name, value } }) => {
    setFiltroLocal({
      ...filtroLocal,
      [name]: value,
    });
  };

  // "global" envia para o estado global o conteúdo atualizado do "local"
  const global = () => {
    setFiltroGlobal([
      ...filtroGlobal,
      filtroLocal,
    ]);
  };

  // Sobre placeholder no select. Link em 2 partes por causa do lint:
  // https://stackoverflow.com/questions/5805059/
  // how-do-i-make-a-placeholder-for-a-select-box
  return (
    <label htmlFor="form" className="header">
      {' '}
      ou escolha um filtro:
      {' '}
      <form id="form">
        <select required name="column" data-testid="column-filter" onChange={ local }>
          <option disabled selected hidden>Escolha uma opção</option>
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
        {' '}
        <select
          required
          name="comparison"
          data-testid="comparison-filter"
          onChange={ local }
        >
          <option disabled selected hidden>Escolha uma opção</option>
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        {' '}
        <input
          name="value"
          type="number"
          data-testid="value-filter"
          onChange={ local }
        />
        {' '}
        <button
          type="button"
          data-testid="button-filter"
          onClick={ global }
        >
          FILTRAR
        </button>
      </form>
    </label>
  );
}

export default SWCombobox;
