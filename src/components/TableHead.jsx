import React from 'react';

function TableHead() {
  return (
    <thead>
      <tr>
        <th>Nome</th>
        <th>
          Período de rotação
          <br />
          (horas)
        </th>
        <th>
          Período orbital
          <br />
          (dias)
        </th>
        <th>Diâmetro</th>
        <th>Clima</th>
        <th>Gravidade</th>
        <th>Terreno</th>
        <th>
          Águas superficiais
          <br />
          (%)
        </th>
        <th>População</th>
        <th>Filmes</th>
        <th>Criado em</th>
        <th>Editado em</th>
        <th>URL</th>
      </tr>
    </thead>
  );
}

export default TableHead;
