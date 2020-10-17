import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './components';
import vehicles from './reducers';
import { createStore} from "redux";


const store = createStore(vehicles);

ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById("root")
);
