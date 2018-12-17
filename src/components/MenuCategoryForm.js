import React, {Component} from 'react';
import { Button } from 'reactstrap';

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
                                        href={file.url_english}
                                        target='_blank'
                                    >
                                        {file.label}
                                    </a>
                                    {' '}
                                    <Button
                                        color="primary"
                                        onClick={() => this.props.clickHandle(file.id)}
                                    >
                                        Open Form
                                    </Button>
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