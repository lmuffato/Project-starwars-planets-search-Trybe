// Requisito 1 - Cria tabela de planetas
import React from 'react';
import Data from './Data';
import './table.css';

const Table = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Rotação</th>
          <th>Orbita</th>
          <th>Diâmetro</th>
          <th>Clima</th>
          <th>Gravidade</th>
          <th>Terreno</th>
          <th>Água da superfície</th>
          <th>População</th>
          <th>Filmes</th>
          <th>Criado</th>
          <th>Editado</th>
          <th>Url</th>
        </tr>
      </thead>
      <Data />
    </table>
  );
};

export default Table;
