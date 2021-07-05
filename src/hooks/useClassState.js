import { useState, useCallback, useEffect, useRef } from 'react';

/**
 * Inject state in callback
 * (state) => { }
 *
 * const [state, setState] = useState({ count: 0 });
 *
 * Ex: setState({ count: 1 }, (state) => { console.log(state.count) });
 * // 1
 * @param {any} initialState
 * @returns {Array} [state, setState]
 *
 *
 * @author Lucas Eduardo Pedroso
 * @version 0.1.0
 */
const useClassState = (initialState) => {
  const [state, setState] = useState(initialState);

  const ref = useRef();

  const setLegacyState = useCallback((stt, fnCb) => {
    ref.current = fnCb;
    if (typeof stt === 'function') {
      setState((prevState) => ({ ...prevState, ...stt(prevState) }));
      return;
    }
    if (typeof stt === 'object' && !Array.isArray(stt)) {
      setState((prevState) => ({ ...prevState, ...stt }));
      return;
    }
    setState((prevState) => ({ ...prevState, [stt]: stt }));
  }, []);

  useEffect(() => {
    if (typeof ref.current === 'function') ref.current(state);
    ref.current = null;
  }, [state]);

  return [state, setLegacyState];
};

export default useClassState;
