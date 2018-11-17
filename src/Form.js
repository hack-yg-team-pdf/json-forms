import React, { Component } from 'react';
import Sidebar from './Sidebar';
import logo from './logo.svg';
import './App.css';
import { JsonForms } from '@jsonforms/react';


class Form extends Component {
  render() {
    return (
      <div> 
         <div className="sidebar"><Sidebar /></div>
         <div className="json-forms">
          <h1>Example Form</h1><JsonForms />
          <button type="button" className="button">Submit Form</button> 
         </div>   
                       
      </div>
    );
  }
}

export default Form