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

import db from './sample-db/all-forms';

const schema = person.schema;
const uischema = person.uischema
const data = person.data;

// TODO: This ain't the best place to deal with DB and fetching of the information.
const test = db;
db.map( (curr, id, val) => {
    // curr is always a category
    // Fetch all documents in the category and retrieve their JSON notation.
    // Get the Schema and UI_Schema
    
});



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
