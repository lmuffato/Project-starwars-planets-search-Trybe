import { createElement as e } from 'react';
import './App.css';
import Table from './components/Table';
import TableDataProvider from './context/TableDataProvider';

const App = () => e(TableDataProvider, null, e(Table));

export default App;
