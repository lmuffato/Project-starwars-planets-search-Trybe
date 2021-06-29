import { createElement as e } from 'react';
import './App.css';
import TableContainer from './components/TableContainer';
import TableDataProvider from './context/TableDataProvider';

const App = () => e(TableDataProvider, null, e(TableContainer));

export default App;
