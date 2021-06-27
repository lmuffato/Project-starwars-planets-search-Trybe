import React, { useContext, useEffect } from 'react';
import MyContext from '../Context/MyContext';

function PlanetFilter() {
  const { filter: { filterByName: { name } },
    setFilterName,
    data,
    setNewData } = useContext(MyContext);
  useEffect(() => {
    const planetFilter = async () => {
      const newData = data.filter((element) => element.name.includes(name));
      setNewData(newData);
    };
    planetFilter();
  }, [name]);
  return (
    <input
      data-testid="name-filter"
      type="text"
      value={ name }
      onChange={ ({ target: { value } }) => setFilterName(value) }
    />
  );
}
export default PlanetFilter;
