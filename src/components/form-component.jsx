import React, { Component } from 'react';
import { Button } from "@chakra-ui/core";
import { Input } from "@chakra-ui/core";

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
        <Input
          variant="outline"
          id = "mainInput" 
          type="textbox"
          value={this.state.inputValue}
          onChange={event => {
            this.handleChange(event);
          }}
        />
        <Button
          type="button"
          leftIcon="add"
          variantColor="green"
          variant="solid"
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
        </Button>
      </form>
    );
  }
}

export default FormComponent;
