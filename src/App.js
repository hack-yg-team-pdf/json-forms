import React, {Component} from 'react';
import Sidebar from './components/Sidebar';
import './App.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from './actionCreators';
import {JsonForms} from '@jsonforms/react';
import axios from 'axios';
import {Actions} from "@jsonforms/core/lib/index";


// Bootstrap
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


// Testing https://github.com/mozilla-services/react-jsonschema-form
import Form from "react-jsonschema-form";


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: true,
            form: {
                schema: {},
                uiSchema: {},
                data: {},
                path: {}
            }
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    sidebarClickHandle(menuItemForm) {
        // console.log(`http://localhost:3500/forms/${menuItemForm.currentTarget.id}`)
        console.log(`http://localhost:3500/forms/${this.state.menuItemId}`)
        // console.log(`http://localhost:3500/forms/${menuItemForm.menuItemId}`)        
        debugger;

        axios
            .get(`http://localhost:3500/forms/${this.state.menuItemId}`)
            .then(response => {

                if (typeof response.data.fields != "undefined") {
                    let formSchema = response.data.fields;
                    let uiSchema = (response.data.ui === undefined) ? {} : response.data.ui;
                    let path = {}; // I don't even know what path is...
                    let data = {}; // TODO Implement one day

                    this.setState({
                        form: {
                            schema: formSchema,
                            uiSchema: uiSchema,
                            path: path,
                            data: data
                        },
                        modal: false
                    });
                }
                // legacy jsonforms
                //store.dispatch(Actions.init(data, formSchema, uischema));

            })
            .catch(error => {
                console.log(error)
            });
    }


    componentDidMount() {

    }


    // TODO: Create header Component
    render() {
        const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;

        return (
            /*
                                    <JsonForms
                            schema={this.state.form.schema}
                            uischema={this.state.form.uiSchema}
                            path={this.state.form.path}
                        />
             */
            <div className={'container container-fluid mx-1'}>
                <Button color="danger" onClick={this.toggle} className={'btn-lg'}>Show Form</Button>

                <div className={'row text-center'}>
                    <h1 className={'mx-auto'}>Awesome Cool fantastyc app!</h1>
                </div>

                <div className={'row'}>
                    <div className={"col col-sm-12 sidebar"}>
                        <Sidebar clickHandle={this.sidebarClickHandle}/>
                    </div>
                </div>

                <Modal
                    isOpen={this.state.modal}
                    size={'modal-lg'}
                    toggle={this.toggle}
                    className={`${this.props.className} mx-auto container-fluid`}
                >
                    <ModalHeader toggle={this.toggle} close={closeBtn}>Modal title</ModalHeader>
                    <ModalBody>
                        <Form schema={this.state.form.schema}
                              onChange={console.log("changed")}
                              onSubmit={console.log("submitted")}
                              onError={console.log("errors")}
                        />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>

            </div>
        );
    }
}

/*
Understanding how to use the store (Provider) in subComponents
https://stackoverflow.com/questions/35300419/redux-do-i-have-to-import-store-in-all-my-containers-if-i-want-to-have-access-t

 */

const mapStateToProps = (state, ownProps = {}) => {
    // use jsonforms.core.schema
    return {
        jsonforms: state.jsonforms,
        formSchema: state.formSchema
    }
}

const mapDispatchToProps = (dispatch) => {
    /*return bindActionCreators({
        updateFormSchema: actionCreators.updateFormSchema.bind(null, data, formSchema, uiSchema),
    }, dispatch)*/
    return bindActionCreators({}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
// export default App