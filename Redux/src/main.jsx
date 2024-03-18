import React from 'react';
import ReactDOM from 'react-dom'; // Corrected import statement
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import store from './app/store'; // Corrected import statement and variable name

ReactDOM.render( // Replaced createRoot with render
  <Provider store={store}> {/* Corrected store variable name */}
    <App />
  </Provider>,
  document.getElementById('root')
);
