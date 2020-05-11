import React, { Component } from 'react';
import FormComponent from "./form-component";
import CheckitemComponent from './checkitem-component';

class ChecklistComponent extends Component {
  state = {
    inputForChecklistitems: []
  };
  handleChange(event) {
    this.setState({ inputForChecklistitems: event.target.value });
  }

  render() {
    
    return (
      <div>
      
        <div className="checklistHeader">
          <h3>{this.props.checklistDetails.name}</h3>
          <button
            className="btn btn-danger"
            onClick={() => {
              this.props.handleDeleteCheckList(this.props.checklistDetails.id);
            }}
          >
            <i className='fa fa-trash'></i>
          </button>
        </div>
        {this.props.checklistDetails.checkItems.map(checkItem => (
          <CheckitemComponent
            key={checkItem.id}
            checkItemDetails={checkItem}
            handleUpdateCheckItem={this.props.handleUpdateCheckItem}
            handleDeleteCheckItem={this.props.handleDeleteCheckItem}
            checklistDetails={this.props.checklistDetails}
          />
        ))}
     <FormComponent 
            formName = "Add CheckItems"
            handleAddCheckItem = {this.props.handleAddCheckItem}
            checkList = {this.props.checklistDetails} />
      </div>
    );
  }
}

export default ChecklistComponent;
