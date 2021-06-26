import React, { useContext } from 'react';

import MyContext from '../Context/MyContext';

function Button() {
  const values = useContext(MyContext);
  return (
    <button
      type="button"
      onClick={ () => ((values.nickName === 'V')
        ? values.setNickName((v) => `${v}inicios Fraga`) : values.setNickName('V')) }
    >
      Complete Name
    </button>
  );
}

export default Button;
