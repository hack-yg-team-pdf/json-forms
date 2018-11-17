import React, { Component } from 'react';

class Sidebar extends Component {
    constructor(props) {
        super(props)

        if (typeof props.clickHandle == "function" )
            this.clickHandle = props.clickHandle/*.bind(this)*/;

    }


    render() {
        return (
            <li>
                <a className={this.props.classes} href="#" id={this.props.id} onClick={this.clickHandle} alt={this.props.description}>{this.props.name}</a>
            </li>
        );
    }
}

export default Sidebar