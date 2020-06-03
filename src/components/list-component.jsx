import React from 'react';
import ModalComponent from './modal-component';
import FormComponent from './form-component';
import CardComponent from './card-component';
import { connect } from 'react-redux';
import * as Action from "../actions/index"
class ListComponent extends React.Component {
  state = {
    boardID : this.props.match.params.id,
    open: false
  };

  componentDidMount() {
    let { dispatch } = this.props;
    let action = Action.requestgetAllListsByBoardId(this.state.boardID);
    dispatch(action);
  }

  handleAddList = (listName) => {
    let { dispatch } = this.props;
    let action = Action.addNewList(this.state.boardID, listName);
    dispatch(action);
  };
 
  onOpenModal = cardDetails => {
    this.setState({ cardID : cardDetails.id , open: true , cardName : cardDetails.name});
    let { dispatch } = this.props;
    let action = Action.requestFetchChecklist(cardDetails.id);
    dispatch(action);
  };

  handleAddChecklist = checkListName => {
    let { dispatch } = this.props;
    let action = Action.addChecklists(this.state.cardID, checkListName);
    dispatch(action);
  };

  handleAddCheckItem = (checkItem, checklist) => {
    let { dispatch } = this.props;
    let action = Action.addCheckitem(checklist, checkItem);
    dispatch(action);
  };

  handleDeleteCheckItem = checkItemDetails => {
    let { dispatch } = this.props;
    let action = Action.deleteCheckitem(checkItemDetails);
    dispatch(action);
  };

  handleDeleteCheckList = idCheckList => {
    let { dispatch } = this.props;
    let action = Action.deleteChecklist(idCheckList);
    dispatch(action);
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    if(this.props.allLists.length === 0){
      return <h1>Loading...</h1>; 
    }
    var allListwithCards =this.props.allLists.map(ele => {
      return (
        <CardComponent
        key={ele.id}
        listDetails={ele}
        listID={ele.id}
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
        handleAddList = {this.handleAddList}
         />
         
        <ModalComponent
          open={this.state.open}
          closeModal={this.onCloseModal}
          cardName = {this.state.cardName}
          checklistsDetails={this.props.checklists} 
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

const mapStateToProps = state => ({
  allLists: state.ListReducer.lists,
  checklists : state.ModalReducres.checklists
});

export default connect(mapStateToProps)(ListComponent);
