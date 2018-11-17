import React, { Component } from 'react';
import MenuCategoryForm from './MenuCategoryForm';
import axios from "axios/index";

class Sidebar extends Component {
  constructor(props) {
      super(props);
      this.state = {categories: []}
  }

    componentDidMount() {
        axios
            .get("http://localhost:3500/form-categories/")
            .then(response => {
                this.setState({categories: response.data});

            })
            .catch(error => {
                console.log(error)
            });
    }

  render() {
    // <FormMenuItem id={4202} name={"Meow"} />
      let stop;
    return (
      <div className="sidebar-list"> 
          {
              this.state.categories.map( (cat, i) => {
                  return( <MenuCategoryForm name={cat.name} alt={cat.description} files={cat.fileinfo} clickHandle={this.props.clickHandle}/> )
              } )
          }
      </div>
    );
  }
}

export default Sidebar