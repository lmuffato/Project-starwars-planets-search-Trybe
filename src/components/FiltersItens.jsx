import React, { useContext } from 'react';
// import getApiStauo from '../services/fetchApiStauo';
import ContextStauo from '../provider/ContextStauo';
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

  // useEffect(() => {
  //   async function fetchData() {
  //     const result = await getApiStauo();
  //     setData(result);
  //   }
  //   fetchData();
  // }, [data]);

  const handleClick = ({ target }) => {
    const text = target.parentNode.firstChild.textContent;
    setFiltersArray([...filtersArray, text]);
    const itemRemoved = removedFilt.filter((item) => item !== text);
    setRemovedFilt(itemRemoved);
    setDataTitle(data);
  };

  return (
    <div className="filters">
      {removedFilt.map((item) => (
        <p key={ item } data-testid="filter" className="filter-removed">
          {item}
          <button type="button" onClick={ handleClick }>X</button>
        </p>
      ))}
    </div>
  );
}

export default FiltersItens;
