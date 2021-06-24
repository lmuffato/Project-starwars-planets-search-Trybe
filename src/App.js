import React from 'react';
import Home from './pages/Home';
import Provider from './provider/ProviderStauo';

function App() {
  return (
    <Provider>
      <Home />
    </Provider>
  );
}

export default App;
