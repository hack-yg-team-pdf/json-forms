import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Sidebar from './components/Sidebar';
import * as serviceWorker from './serviceWorker';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import { Actions, jsonformsReducer } from '@jsonforms/core';
import { materialFields, materialRenderers } from '@jsonforms/material-renderers';


import { person } from '@jsonforms/examples';

// TODO: DELETE ME, testing purposes
const yg3538 = require('./manual-json-forms/yg_3538_e');

// import db_auto from './sample-db/automated_forms';
// import db_manual from './sample-db/manual_forms';

/* TODO: This ain't the best place to deal with DB and fetching of the information.
    In fact, it should even be in a REST api server...
 */
//
// db_manual.map( (category, id, categories) => {
//     // curr is always a category
//
//     // Fetch all documents in the category and retrieve their JSON file.
//     // Get the Schema and UI_Schema
//
//     // Handle default case when no JSON file specified. Retrieve per fname.
//
//     let stop;
//     return stop;
// });

// const schema = person.schema;
// const uischema = person.uischema
// const data = person.data;

let schema = yg3538.fields;
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

store.dispatch(Actions.init(data, schema, uischema));


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
