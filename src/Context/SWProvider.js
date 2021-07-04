import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import SWContext from './SWContext';
import SWApi from '../Component/SWApi';

function SWProvider({ children }) {
  const [data, setData] = useState([]);
  // Entendi que a constante "name" é uma exigência do Readme
  const [name, setinputNome] = useState('');
  const [filtroGlobal, setFiltroGlobal] = useState([]);

  // Conteúdo do Bloco 18.3
  useEffect(() => {
    SWApi().then(({ results }) => setData(results));
  }, []);

  useEffect(() => {
    // Os dados são recebidos e desestruturados para facilitar uso do switch
    // Para cada dado (column, comparison, value) uma mudança no setData
    // para selecionar novas informações e renderizar uma nova tabela
    // Utilizei "Number" dentro desse useEffect porque os dados são recebidos
    // como string e precisam ser utilizados no formato numérico
    // (swplaneta[column]) => Tem função de "index"
    filtroGlobal.map((dados) => {
      const { column, comparison, value } = dados;
      switch (comparison) {
      case 'maior que':
        return setData(
          [...data.filter((swplaneta) => Number(swplaneta[column]) > Number(value))],
        );
      case 'menor que':
        return setData(
          [...data.filter((swplaneta) => Number(swplaneta[column]) < Number(value))],
        );
      case 'igual a':
        return setData(
          [...data.filter((swplaneta) => Number(swplaneta[column]) === Number(value))],
        );
      default:
        return data;
      }
    });
  }, [filtroGlobal]);

  // Constante "shareStates" com as informações dos estados que preciso compartilhar
  // Essas informações serão entregues via props dentro do value do Provider
  const shareStates = {
    data,
    filters: { filterByName: { name } },
    setinputNome,
    filtroGlobal,
    setFiltroGlobal,
  };

  return (
    <SWContext.Provider value={ shareStates }>
      {children}
    </SWContext.Provider>
  );
}

// Retirado do site: https://pt-br.reactjs.org/docs/typechecking-with-proptypes.html
// Sobre o "node" abaixo: Anything that can be rendered: numbers, strings, elements
// or an array (or fragment) containing these types.
// Exemplo: optionalNode: PropTypes.node

SWProvider.propTypes = { children: PropTypes.node.isRequired };

export default SWProvider;
