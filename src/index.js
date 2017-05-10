import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import './index.css';
import createStore from './store';


import Routes from './routes';

const StoreInstance = createStore();

ReactDOM.render(
  <Provider store={StoreInstance}>
    <Routes history={browserHistory}/>
  </Provider >,
  document.getElementById('root')
);
