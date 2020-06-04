import React, { Component } from 'react';
import FormComponent from "./form-component"
import * as CardAction from '../actions';
import { connect } from 'react-redux';
import IndicidualCard from './individual-card';
import { Text } from "@chakra-ui/core";

class CardComponent extends Component {

  componentDidMount() {
    let { dispatch } = this.props;
    let action = CardAction.requestGetAllCardsByListId(this.props.listDetails)
    dispatch(action);
  };


  handleAddcard = cardName => {
    let { dispatch } = this.props;
    let action = CardAction.requestAddNewCard(this.props.listDetails.id, cardName, this.props.listDetails)
    dispatch(action);
  };


  handleDeleteCard = (deleteCardID) => {
    let { dispatch } = this.props;
    let action = CardAction.requestdeleteCardAction(deleteCardID, this.props.listDetails.id, this.props.listDetails);
    dispatch(action);
  };

  render() {
    var allCardsWithDetails = this.props.allCards.map(eachCard => 
      <IndicidualCard
       key={eachCard.id}
        CardDetails = {eachCard}
        onOpenModal = {this.props.onOpenModal}
        handleDeleteCard = {this.handleDeleteCard}/>
      )
    return (
      <div className="listContainer list-cards u-fancy-scrollbar u-clearfix js-list-cards js-sortable ui-sortable">
      <div className="listHead">
        <Text fontSize="4xl" className="listName">{this.props.listDetails.name}</Text>
        </div>
        <div className="cards">
        {allCardsWithDetails}
        </div>
        <FormComponent 
        formName = "Add Card"
        handleAddFunction = {this.handleAddcard}
        />
      </div>
    );
  }
}

const mapStateToProps=(state,ownProps)=>{
  return {
    allCards : state.ListReducer.lists[state.ListReducer.lists.indexOf(ownProps.listDetails)].cards
}}

export default connect(mapStateToProps)(CardComponent);