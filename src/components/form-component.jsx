import React, { Component } from 'react';

class FormComponent extends Component {
  state = {
    inputValue: ''
  };
  handleChange(event) {
    this.setState({ inputValue: event.target.value });
  }
  render() {
    return (
      <form>
        <input
          id = "mainInput" 
          type="textbox"
          value={this.state.inputValue}
          onChange={event => {
            this.handleChange(event);
          }}
        />
        <button
          type="button"
          onClick={() => {
            this.props.formName === 'Add List'
              ? this.props.handleAddList(this.state.inputValue)
              : this.props.formName === 'Add Card'
              ? this.props.handleAddcard(this.state.inputValue)
              : this.props.formName === 'Add Checklist'
              ? this.props.handleAddChecklist(this.state.inputValue)
              : this.props.handleAddCheckItem(
                  this.state.inputValue,
                  this.props.checkList
                );
                this.setState({
                  inputValue: ''
                });
          }}
          className="btn btn-success"
        >
          {this.props.formName}
        </button>
      </form>
    );
  }
}

export default FormComponent;
