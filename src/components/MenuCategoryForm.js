import React, {Component} from 'react';
import FormMenuItem from './MenuItemForm';

class MenuCategoryForm extends Component {
    constructor(props) {
        super(props)

        /*if (typeof props.clickHandle == "function" )
            this.clickHandle = props.clickHandle/*.bind(this)*/

    }

    outputCategories() {

    }


    render() {

        return (
            <div>
                <h2>{this.props.name}</h2>
                <ul className="json-list">
                    {
                        this.props.files.map( (file, i) => {
                            let stop;
                            return(
                                <FormMenuItem
                                    app={this.props.app}x
                                    id={file.id}
                                    menuItemId={file.id}
                                    name={file.label}
                                    description={'Sample description'}
                                    pdf={file.fname}
                                    classes={'cool'}
                                    clickHandle={this.props.clickHandle}
                                />
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default MenuCategoryForm