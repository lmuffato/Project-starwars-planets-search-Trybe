import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import store from './store';
import PersonalForm from './Pages/PersonalForm.js'
import ProfessionalForm from './Pages/ProfissonalForm.js'
import FormDataDisplay from './Pages/FormDataDisplay.js'
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={PersonalForm} />
            <Route path="/professionalForm" component={ProfessionalForm} />
            <Route path="/formDisplay" component={FormDataDisplay} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
