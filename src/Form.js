import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { JsonForms } from '@jsonforms/react';


class Form extends Component {
  render() {
    return (
      <div> 
         <img src={logo} className="App-logo" alt="logo" />
         {/* other markup... */}
         <JsonForms />
      </div>
    );
  }
}

export default Form