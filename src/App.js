import React, { Component } from 'react';
import Sidebar from './components/Sidebar';
import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from './actionCreators';
import { JsonForms } from '@jsonforms/react';
import axios from 'axios';
import {Actions} from "@jsonforms/core/lib/index";



class App extends Component {

    constructor(props) {
      super(props)
    }

    sidebarClickHandle(something) {
        console.log(something);
        alert(something);
    }


    componentDidMount() {
        axios
            .get("http://localhost:3500/forms/yg3538_e")
            .then(response => {

                // create an array of contacts only with relevant data
                // const newContacts = response.data.map(c => {
                //     return {
                //         id: c.id,
                //         name: c.name
                //     };
                // });

                let formSchema = response;

                // create a new "State" object without mutating
                // the original State object.
                /*const newState = Object.assign({}, this.state, {
                    formSchema: formSchema
                });*/

                // store the new state object in the component's state
                //this.setState(newState);

                //store.dispatch(Actions.init(data, formSchema, uischema));

            })
            .catch(error => {
                console.log(error)
            });
    }


    // TODO: Create header Component
    render() {
    return (
      <div>

          <div>
              <h1>Awesome Cool fantastyc app!</h1>
          </div>

         <div className="sidebar">
             <Sidebar clickHandle={this.sidebarClickHandle}/>
         </div>

          <div className="json-forms">
          <h1>Title</h1>
              <JsonForms
                  schema={this.props.formSchema}
                  uischema={this.props.uiSchema}
                  path={this.props.path}
              />
          <button type="button" className="button">Submit Form</button> 

          </div>
                       
      </div>
    );
  }
}

/*
Understanding how to use the store (Provider) in subComponents
https://stackoverflow.com/questions/35300419/redux-do-i-have-to-import-store-in-all-my-containers-if-i-want-to-have-access-t

 */

const mapStateToProps = (state, ownProps = {}) =>  {
    return {
        jsonforms: state.jsonforms,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        updateFormSchema: actionCreators.updateFormSchema,
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
// export default App