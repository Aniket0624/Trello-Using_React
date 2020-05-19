import React, { Component } from 'react';
import FormComponent from "./form-component"

class CardComponent extends Component {
  state = {
    cardsDetails: [],
    inputForCard: ' ',
    open: false
  };

  handleChange(event) {
    this.setState({ inputForCard: event.target.value });
  }
  componentDidMount() {
    const url = `https://api.trello.com/1/lists/${this.props.listDetails.id}/cards?key=0a888fcd467afb859a113e18472a165a&token=f287454275494e79765ee9355d8d4678edffe624889a85aa91fa254571b4bb14`;
    fetch(url, {
      method: 'Get'
    })
      .then(res => res.json())
      .then(json => this.setState({ cardsDetails: json }));
  }
  handleAddcard = cardName => {
    fetch(
      `https://api.trello.com/1/cards?name=${cardName}&idList=${this.props.listDetails.id}&keepFromSource=all&key=0a888fcd467afb859a113e18472a165a&token=f287454275494e79765ee9355d8d4678edffe624889a85aa91fa254571b4bb14`,
      { method: 'POST' }
    )
      .then(response => response.json())
      .then(element => {
        this.setState({
          cardsDetails: this.state.cardsDetails.concat([element])
        });
      });
  };
  handleDeleteCard = (event,deleteCard) => {
    event.stopPropagation();
    this.setState({
      cardsDetails: this.state.cardsDetails.filter(
        card => card.id !== deleteCard
      )
    });
    fetch(
      `https://api.trello.com/1/cards/${deleteCard}?key=0a888fcd467afb859a113e18472a165a&token=f287454275494e79765ee9355d8d4678edffe624889a85aa91fa254571b4bb14`,
      { method: 'DELETE' }
    );
  };
  render() {
    return (
      <div className="listContainer list-cards u-fancy-scrollbar u-clearfix js-list-cards js-sortable ui-sortable">
      <div className="listHead">
        <h2 className="listName">{this.props.listDetails.name}</h2>
        </div>
        <div className="cards">
        {this.state.cardsDetails.map(eachCard => (
          <div onClick={() => this.props.onOpenModal(eachCard)} className='cardDiv'>
            <h6 className='cardName'>{eachCard.name}</h6>
            <div>
              <button
                onClick={event => this.handleDeleteCard(event, eachCard.id)}
                 className='deleteButton btn btn-xsm'>
                <i className='fa fa-trash'></i>
             </button>
            </div>
          </div>
        ))}
        </div>
        <FormComponent 
        formName = "Add Card"
        handleAddcard = {this.handleAddcard} />
      </div>
    );
  }
}

export default CardComponent;
