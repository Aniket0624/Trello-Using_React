import React, { Component } from 'react';
import FormComponent from "./form-component"
import { fetchAllCardsWithListId, addNewCard, deleteCard } from '../actions';
import { connect } from 'react-redux';
import IndicidualCard from './individual-card';

class CardComponent extends Component {

  componentDidMount() {
    this.props.showAllCardByListId(this.props.listDetails);
  };

  render() {
    var allCardsWithDetails = this.props.allCards.map(eachCard => 
      <IndicidualCard
       key={eachCard.id}
        CardDetails = {eachCard}
        onOpenModal = {this.props.onOpenModal}
        handleDeleteCard = {(cardID) => this.props.handleDeleteCard(cardID, eachCard.idList, this.props.listDetails.id )}/>
      )
    return (
      <div className="listContainer list-cards u-fancy-scrollbar u-clearfix js-list-cards js-sortable ui-sortable">
      <div className="listHead">
        <h2 className="listName">{this.props.listDetails.name}</h2>
        </div>
        <div className="cards">
        {allCardsWithDetails}
        </div>
        <FormComponent 
        formName = "Add Card"
        handleAddcard ={(name) => this.props.handleAddCard(this.props.listDetails.id, name, this.props.listDetails)} />
      </div>
    );
  }
}

const mapStateToProps=(state,ownProps)=>{
  return {
    allCards : state.ListReducer.lists[state.ListReducer.lists.indexOf(ownProps.listDetails)].cards
}}

const mapDispatchToProps =dispatch => ({
  showAllCardByListId : list => dispatch(fetchAllCardsWithListId(list)),
  handleAddCard : (listID, cardName,list) => dispatch(addNewCard(listID,cardName, list, listID)),
  handleDeleteCard : (cardID, listID, list) => dispatch(deleteCard(cardID, listID, list))
})

export default connect(mapStateToProps, mapDispatchToProps)(CardComponent);