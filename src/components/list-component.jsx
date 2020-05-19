import React from 'react';
import ModalComponent from './modal-component';
import FormComponent from './form-component';
import CardComponent from './card-component';

class ListComponent extends React.Component {
  state = {
    listDetails: [],
    checklistsDetails: [],
    open: false,
    inputForList : []
  };

  handleChange(event) {
    this.setState({ inputForList: event.target.value });
  }
  componentDidMount() {
    fetch(
      `https://api.trello.com/1/boards/${this.props.match.params.id}/lists?cards=none&card_fields=all&filter=open&fields=all&key=0a888fcd467afb859a113e18472a165a&token=f287454275494e79765ee9355d8d4678edffe624889a85aa91fa254571b4bb14`
    )
      .then(response => response.json())
      .then(lists => this.setState({ listDetails: lists }));
  }
  handleAddList = (listName) => {
    if (listName !== '') {
      fetch(
        `https://api.trello.com/1/lists?name=${listName}&idBoard=${this.props.match.params.id}&pos=bottom&key=0a888fcd467afb859a113e18472a165a&token=f287454275494e79765ee9355d8d4678edffe624889a85aa91fa254571b4bb14`,
        {
          method: 'POST'
        }
      )
        .then(response => response.json())
        .then(list => {
          this.setState({ listDetails: this.state.listDetails.concat([list]) });
        });
    }
    // value = " ";
  };
  handleAddChecklist = checkListName => {
    fetch(
      `https://api.trello.com/1/cards/${this.state.cardId}/checklists?name=${checkListName}&key=0a888fcd467afb859a113e18472a165a&token=f287454275494e79765ee9355d8d4678edffe624889a85aa91fa254571b4bb14`,
      { method: 'POST' }
    )
      .then(response => response.json())
      .then(checkList =>
        this.setState({
          checklistsDetails: this.state.checklistsDetails.concat([checkList])
        })
      );
  };
  handleAddCheckItem = (checkItem, checklist) => {
    fetch(
      `https://api.trello.com/1/checklists/${checklist.id}/checkItems?name=${checkItem}&pos=bottom&checked=false&key=0a888fcd467afb859a113e18472a165a&token=f287454275494e79765ee9355d8d4678edffe624889a85aa91fa254571b4bb14`,
      {
        method: 'POST'
      }
    )
      .then(response => response.json())
      .then(data => {
        const checklistsDetails = this.state.checklistsDetails;

        checklistsDetails[
          checklistsDetails.indexOf(checklist)
        ].checkItems = checklistsDetails[
          checklistsDetails.indexOf(checklist)
        ].checkItems.concat([data]);
        this.setState({
          checklistsDetails: checklistsDetails
        });
      });
  };
  handleDeleteCheckItem = checkItemDetails => {
    fetch(
      `https://api.trello.com/1/checklists/${checkItemDetails.idChecklist}/checkItems/${checkItemDetails.id}?key=0a888fcd467afb859a113e18472a165a&token=f287454275494e79765ee9355d8d4678edffe624889a85aa91fa254571b4bb14`,
      { method: 'DELETE' }
    );

    this.setState({
      checklistsDetails: this.state.checklistsDetails.map(checkList => {
        if (checkList.id === checkItemDetails.idChecklist) {
          checkList.checkItems = checkList.checkItems.filter(
            c => c.id !== checkItemDetails.id
          );
        }

        return checkList;
      })
    });
  };

  onOpenModal = cardDetails => {
    fetch(
      `https://api.trello.com/1/cards/${cardDetails.id}/checklists?checkItems=all&checkItem_fields=name%2CnameData%2Cpos%2Cstate&filter=all&fields=all&key=0a888fcd467afb859a113e18472a165a&token=f287454275494e79765ee9355d8d4678edffe624889a85aa91fa254571b4bb14`
    )
      .then(response => response.json())
      .then(checkLists => this.setState({ checklistsDetails: checkLists }));
    this.setState({ cardId: cardDetails.id, open: true });
  };
  handleDeleteCheckList = idCheckList => {
    fetch(
      `https://api.trello.com/1/checklists/${idCheckList}?key=0a888fcd467afb859a113e18472a165a&token=f287454275494e79765ee9355d8d4678edffe624889a85aa91fa254571b4bb14`,
      { method: 'DELETE' }
    );
    this.setState({
      checklistsDetails: this.state.checklistsDetails.filter(
        checklist => checklist.id !== idCheckList
      )
    });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    if(this.state.listDetails.length === 0){
      return <h1>Loading...</h1>; 
    }
    var allListwithCards = this.state.listDetails.map(ele => {
      return (
        <CardComponent
        key={ele.id}
        listDetails={ele}
        onOpenModal={this.onOpenModal}
      />
      )
    })
    return (
      <div
      style={{ display: 'flex', justifyContent: 'space-between' }}
      className="allLists"
    >
       {allListwithCards}       
        <FormComponent 
        formName = "Add List"
        handleAddList = {this.handleAddList} />
         
        <ModalComponent
          open={this.state.open}
          closeModal={this.onCloseModal}
          checklistsDetails={this.state.checklistsDetails}
          handleAddChecklist={this.handleAddChecklist}
          handleAddCheckItem={this.handleAddCheckItem}
          handleDeleteCheckItem={this.handleDeleteCheckItem}
          handleUpdateCheckItem={this.handleUpdateCheckItem}
          handleDeleteCheckList={this.handleDeleteCheckList}
        />
      </div>
    );
  }
}

export default ListComponent;
