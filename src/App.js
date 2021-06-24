import { createElement as e } from 'react';
import './App.css';
import Table from './components/Table';
import TableProvider from './context/TableProvider';

const App = () => e(TableProvider, null, e(Table));

export default App;
