import React, { useContext } from 'react';
import ContextStauo from '../provider/ContextStauo';
import Buttons from './Buttons';
import '../styles/home.css';

function FiltersItens() {
  const {
    data,
    removedFilt,
    filtersArray,
    setFiltersArray,
    setRemovedFilt,
    setDataTitle,
  } = useContext(ContextStauo);

  const handleClick = ({ target }) => {
    const text = target.parentNode.firstChild.textContent;
    setFiltersArray([...filtersArray, text]);
    const itemRemoved = removedFilt.filter((item) => item !== text);
    setRemovedFilt(itemRemoved);
    setDataTitle(data);
  };

  const btn = () => {
    const dataTestid = '';
    const funcHandleClick = handleClick;
    const text = 'X';

    const obj = { text, dataTestid, funcHandleClick };
    return <Buttons params={ obj } />;
  };

  return (
    <div className="filters">
      {removedFilt.map((item) => (
        <p key={ item } data-testid="filter" className="filter-removed">
          {item}
          {btn()}
        </p>
      ))}
    </div>
  );
}

export default FiltersItens;
