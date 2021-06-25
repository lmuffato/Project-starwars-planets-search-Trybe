import React from 'react';
import Thead from './Thead';
import Tbody from './Tbody';
import styles from './table.module.css';

export default function Table() {
  return (
    <table className={ styles.table }>
      <Thead />
      <Tbody />
    </table>
  );
}
