import React, { Component } from 'react';

class MenuItemForm extends Component {
    render() {
        return (
            <li>
                <a
                    id={this.props.menuItemId}
                    className={this.props.classes}
                    href="#"
                    onClick={this.clickHandle}
                    alt={this.props.description}
                >
                    {this.props.name}
                </a>
            </li>
        );
    }
}

export default MenuItemForm