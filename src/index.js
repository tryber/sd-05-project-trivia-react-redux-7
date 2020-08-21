import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './Store';

ReactDOM.render(
  /* inclido Provider no index para poder utilizar o store em todos arquivos e o
  BrowserRouter no index para poder utilizar rotas em todos as paginas*/
  /* <Provider store={store}> */
    <BrowserRouter>
      <App />
    </BrowserRouter>
  /* </Provider> */,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
