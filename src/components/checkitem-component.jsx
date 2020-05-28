import React, { Component } from 'react';
import { updateCheckitem } from '../actions';
import { connect } from 'react-redux';
import { Checkbox } from "@chakra-ui/core";


class CheckitemComponent extends Component {
  state = {
    checkState: " "
  };
  handleCheckState = state => {
    this.setState({ checkState: state });
  };
  handleUpdateCheckItem = (idCheckItem, event, idCard) => {
    let state;
    if (event.target.checked === true) {
      state = 'complete';
    } else {
      state = 'incomplete';
    }
    fetch(
      `https://api.trello.com/1/cards/${idCard}/checkItem/${idCheckItem}?state=${state}&key=0a888fcd467afb859a113e18472a165a&token=f287454275494e79765ee9355d8d4678edffe624889a85aa91fa254571b4bb14`,
      { method: 'PUT' }
    );
  };
  componentDidMount() {
    if (this.props.checkItemDetails.state === 'incomplete') {
      this.setState({ checkState: false });
    }
    else {
      this.setState({ checkState : true});
    }
  }

  render() {
    return (
      <React.Fragment>
      
        <div className="chechklistitems">
          <div className = "textItem">
            <Checkbox
              style = {{marginRight : "0.5em", backgroundColor : "white", borderRadius : "0.5em", borderColor : "green"}}
              size="lg" variantColor="green" 
              isChecked={this.state.checkState}
              onChange={event => {
                this.handleUpdateCheckItem(
                  this.props.checkItemDetails.id,
                  event,
                  this.props.checklistDetails.idCard
                );
                this.handleCheckState(event.target.checked);
              }}
            />{' '}
            {this.props.checkItemDetails.name}
          </div>
          <button
            className="btn btn-danger"
            onClick={() => {
              this.props.handleDeleteCheckItem(this.props.checkItemDetails);
            }}
          >
            <i className='fa fa-trash'></i>
          </button>
          <br />
        </div>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleUpdateCheckItem : (idCheckItem, event, idCard) => dispatch(updateCheckitem(idCheckItem, event, idCard))
})

export default connect (mapDispatchToProps)(CheckitemComponent) ;
