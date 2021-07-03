import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import SWContext from './SWContext';
import SWApi from '../Component/SWApi';

function SWProvider({ children }) {
  const [data, setData] = useState([]);

  // Conteúdo do Bloco 18.3
  useEffect(() => {
    SWApi().then(({ results }) => setData(results));
  }, []);

  // Constante "shareStates" com as informações dos estados que preciso compartilhar
  // Essas informações serão entregues via props dentro do value do Provider
  const shareStates = { data };

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
