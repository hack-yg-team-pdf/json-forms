import React, {Component} from 'react';
import Sidebar from './components/Sidebar';
import './App.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import yg4552 from './data/yg4552.json'
import { clone } from 'lodash'

// Bootstrap
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

// Testing https://github.com/mozilla-services/react-jsonschema-form
import Form from "react-jsonschema-form";

class FormModal extends Component {
    titlelessSchema() {
        const schema = clone(this.props.schema)
        delete schema.title
        return schema
    }

    render () {
        return <Modal
            isOpen={this.props.isOpen}
            size={'modal-lg'}
            className='mx-auto container-fluid'
        >
            <ModalHeader toggle={this.props.toggle}>{this.props.schema.title}</ModalHeader>
            <ModalBody>
                <Form schema={this.titlelessSchema()}
                      onSubmit={
                        ({formData}) => {
                            console.log("Data submitted: ",  formData)
                            window.toggleFunction = this.toggle
                            this.toggle()
                            console.log("Toggle function called!")
                        }
                      }
                      onError={
                        ({errorsData}) => {
                            console.log("Form.onErrors")
                            window.errors = errorsData
                            console.log(errorsData)
                        }
                      }
                />
            </ModalBody>
        </Modal>
    }
}

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalOpen: false,
            modalSchema: {}
        }
    }

    showForm (formId) {
        console.log(`User requested to show form ${formId}`)

        if(formId === 'yg4552') {
            this.setState({
                modalOpen: true,
                modalSchema: yg4552
            })
        }
        // now do it!
    }

    render() {
        return (
            <div className={'container container-fluid mx-1'}>
                <div className={'row text-center'}>
                    <h1 className={'mx-auto'}>Repository Yukon Government Forms</h1>
                </div>

                <div className={'row'}>
                    <div className={"col col-sm-12 sidebar"}>
                        <Sidebar
                            app={this}
                            clickHandle={(formId) => this.showForm(formId)}
                        />
                    </div>
                </div>
                <FormModal
                    isOpen={this.state.modalOpen}
                    toggle={() => this.setState({modalOpen: !this.state.modalOpen}) }
                    schema={this.state.modalSchema}
                />
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