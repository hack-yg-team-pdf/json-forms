import React, { Component } from 'react';

class Sidebar extends Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   exampleState: false
    // }

    this.timsClickHandler = props.clickHandle;

    //this.handleClick = this.handleClick.bind(this)
  }
  // method to create a list of json forms from JSON:
  // findJSONlist {
  // }

  handleClick(event, el) {
    console.log('pdf with id of ' + event);
    console.log(event);
    console.log(el);
    // App.exampleMethod(id);
  }

  render() {
    // <FormMenuItem id={4202} name={"Meow"} />
    return (
      <div className="sidebar-list"> 
      	<h2>JSON Forms</h2>
      	<ul className="json-list">
      		<li onClick={this.handleClick}><a href="#" id="4202">PDF YG4202</a></li>
      		<li><a href="#" id="4203" onClick={this.timsClickHandler(this)}>PDF YG4203</a></li>
  		</ul>
      </div>
    );
  }
}

export default Sidebar