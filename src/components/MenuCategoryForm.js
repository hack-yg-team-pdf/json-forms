import React, {Component} from 'react';

class MenuCategoryForm extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.name}</h2>
                <ul className="json-list">
                    {
                        this.props.files.map( (file, i) => {
                            return(
                                <li>
                                    <a
                                        id={`a-link-for-form-${file.id}`}
                                        href="#"
                                        onClick={this.props.clickHandle}
                                    >
                                        {file.label}
                                    </a>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default MenuCategoryForm