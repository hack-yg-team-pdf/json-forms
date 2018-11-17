import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import { Actions, jsonformsReducer } from '@jsonforms/core';
import { materialFields, materialRenderers } from '@jsonforms/material-renderers';


// const schema = person.schema;
// const uischema = person.uischema
// const data = person.data;


let schema = {};
let uischema = undefined;
let data = undefined;

const store = createStore(
  combineReducers({ jsonforms: jsonformsReducer() }),  
  {
    jsonforms: {
      renderers: materialRenderers,
      fields: materialFields,
    }
  }
);


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
