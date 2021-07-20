import React from 'react';
import ReactDOM from 'react-dom';
import ApiProvider from './contexts/apiProvider';
import App from './App';

ReactDOM.render(
  <ApiProvider>
    <App />
  </ApiProvider>,
  document.getElementById('root'),
);
