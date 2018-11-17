import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { JsonForms } from '@jsonforms/react';


class Sidebar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      findCities: false
    }
    // this.findHottestCities = this.findHottestCities.bind(this)
  }

  render() {
    return (
      <div className="sidebar-list"> 
      	<h2>JSON Forms</h2>
      	<ul className="json-list">
      		<li><a href="#" id="4202">PDF YG4202</a></li>
      		<li><a href="#" id="4203">PDF YG4203</a></li>
      		<li><a href="#" id="4204">PDF YG4204</a></li>
      		<li><a href="#" id="4205">PDF YG4205</a></li>
      		<li><a href="#" id="4206">PDF YG4206</a></li>
      		<li><a href="#" id="4207">PDF YG4207</a></li>
      		<li><a href="#" id="4208">PDF YG4208</a></li>
      		<li><a href="#" id="4209">PDF YG4209</a></li>
      		<li><a href="#" id="4210">PDF YG4210</a></li>
  		</ul>
      </div>
    );
  }
}

export default Sidebar