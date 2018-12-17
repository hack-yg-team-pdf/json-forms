import React, {Component} from 'react';
import Sidebar from './components/Sidebar';
import './App.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import axios from 'axios';
import yg4552 from './data/yg4552.json'
import { clone } from 'lodash'
// import yg4552 from './data/form-api-server/automated-json-forms/yg4552_b.json'


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

    buildSchema () {
        return clone(yg4552)
    }

    schemaTitle () {
        return this.buildSchema().title
    }

    titlelessSchema () {
        const result = this.buildSchema()
        delete result.title
        return result
    }

    toggle() {
        this.setState({ modal: !this.state.modal })
    }

    setFormSchemaAndShow (formSchema) {
        this.props.app.setState({
            form: {
                schema: formSchema
            },
            modal: true
        })
    }

    attemptFormLoadFromServer (formId) {
        console.log(`Accessing REST @ http://localhost:3500/forms/${this.props.id}`)
        axios
            .get(`http://localhost:3500/forms/${this.props.id}`)
            .then(response => {
                if (response.data.fields === undefined) {
                    console.error(`I didn't understand the server response for form ${this.props.id}; couldn't find form schema`)
                    return
                }
                this.setFormSchemaAndShow(response.data.fields)
                /*let uiSchema = (response.data.ui === undefined) ? {} : response.data.ui;
                let path = {}; // I don't even know what path is...
                let data = {}; // TODO Implement one day*/
                // this.setState({
                //     form: {
                //         schema: formSchema,
                //         uiSchema: uiSchema,
                //         path: path,
                //         data: data
                //     }
                // });
            })
            .catch(error => {
                console.log(error)
                alert(error)
            })
    }

    sidebarClickHandle(menuItemForm) {
        // this.setFormSchemaAndShow(yg4552)
        this.props.app.setState({
            form: {
                schema: yg4552
            },
            modal: true
        })
    }

    // TODO: Create header Component
    render() {
        const onSubmit = ({formData}) => {
            console.log("Data submitted: ",  formData)
            this.toggle()
        }

        const onErrors = ({errorsData}) => {
            console.log("Form.onErrors")
            window.errors = errorsData
            console.log(errorsData)
        }

        return (
            <div className={'container container-fluid mx-1'}>
                <div className={'row text-center'}>
                    <h1 className={'mx-auto'}>Repository Yukon Government Forms</h1>
                </div>

                <div className={'row'}>
                    <div className={"col col-sm-12 sidebar"}>
                        <Sidebar clickHandle={this.sidebarClickHandle} app={this}/>
                    </div>
                </div>

                <Modal
                    isOpen={this.state.modal}
                    size={'modal-lg'}
                    toggle={this.toggle}
                    className={`${this.props.className} mx-auto container-fluid`}
                >
                    <ModalHeader toggle={this.toggle} close={
                        <button className="close" onClick={this.toggle}>&times;</button>
                    }>{this.schemaTitle()}</ModalHeader>
                    <ModalBody>
                        <Form schema={this.titlelessSchema()}
                              onSubmit={onSubmit}
                              onError={onErrors}
                        />
                    </ModalBody>
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