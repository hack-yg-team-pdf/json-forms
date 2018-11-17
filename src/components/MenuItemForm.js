import React, { Component } from 'react';

class MenuItemForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            classes: "",
            menuitemformid: "",
            description: "",
            name: "",
            menuItemId: "3538"
        }

        if (typeof props.clickHandle == "function" )
            this.clickHandle = props.clickHandle.bind(this);

    }

    // id={this.props.id}

    render() {
        return (
            <li>
                <a className={this.props.classes} href="#" id={this.props.menuItemId} onClick={this.clickHandle} alt={this.props.description}>{this.props.name}</a>
            </li>
        );
    }
}

export default MenuItemForm