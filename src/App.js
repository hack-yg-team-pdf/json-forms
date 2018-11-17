import React, { Component } from 'react';
import Sidebar from './components/Sidebar';
import logo from './logo.svg';
import './App.css';
import { JsonForms } from '@jsonforms/react';


class App extends Component {

    // TODO: Create header Component
    render() {
    return (
      <div>

          <div>
              <h1>Awesome Cool fantastyc app!</h1>
          </div>

         <div className="sidebar">
             <Sidebar />
         </div>

          <div className="json-forms">
          <h1>Title</h1>
             <JsonForms />
          <button type="button" className="button">Submit Form</button> 

          </div>
                       
      </div>
    );
  }
}

export default App