import React, { useContext } from 'react';
import MyContext from '../Context/MyContext';

function ResetButton() {
  const { setFilterName } = useContext(MyContext);
  async function reset() {
    await setFilterName('o');
    const resetToo = () => setFilterName('');
    const showOptions = document.querySelectorAll('.reset');
    showOptions.forEach((option) => option.removeAttribute('hidden'));
    console.log(showOptions);
    resetToo();
  }
  return (
    <button
      id="resetButton"
      type="button"
      onClick={ () => reset() }
    >
      RESET FILTER
    </button>);
}

export default ResetButton;
