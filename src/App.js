import React from 'react';
import Table from './Components/Table';
import Provider from './Context/Provider';
import './App.css';
import MyContext from './Context/MyContext';
import Button from './Components/Button';

function App() {
  return (
    <Provider>
      <div>
        <h1>
          Author:
        </h1>
        <MyContext.Consumer>
          { (name) => <h2>{ name.nickName }</h2>}
        </MyContext.Consumer>
        <Button />
        <h1>Project Star Wars Planets presents:</h1>
        <Table />
      </div>
    </Provider>
  );
}

export default App;
