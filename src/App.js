import React from 'react';
import Provider from './context/Provider';
import Table from './componet/Table';
import Input from './componet/Input';
import './App.css';

function App() {
  return (
    <Provider>
      <Table />
      <Input />
    </Provider>
  );
}
/*
Este projeto foi construído com colaboração dos meu colegas da Turma-10 Tribo-A.
Gostaria de deixar meus agradecimentos ao envolvidos por ter compartilhado seus
conhecimentos.
Guilherme Dornelles | https://github.com/guilhermemd
André Barroso | https://github.com/AndreBarroso
Michael Petterson | https://github.com/michael-petterson-06
Felipe Müller | https://github.com/felipemuller20
*/
export default App;
