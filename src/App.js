import React from 'react';
import './App.css';
import Table from './component/Table';
import StarProvider from './provider/StarProvider';

function App() {
  return (
    <div>
      <StarProvider>
        <Table />
        {/* <p>{ planets }</p> */}
      </StarProvider>
    </div>
  );
}

export default App;
