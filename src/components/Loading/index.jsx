import React from 'react';
import { FaRegMoneyBillAlt } from 'react-icons/fa';

import styles from './styles.module.css';

function Loading() {
  return (
    <main className={ styles.container }>
      <div className={ styles.animation }>
        <FaRegMoneyBillAlt color="#2A9D8F" size="4rem" />
      </div>
      <h2>LOADING...</h2>
    </main>
  );
}

export default Loading;
