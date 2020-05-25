import React from 'react';
import ModalComponent from './modal-component';
import FormComponent from './form-component';
import CardComponent from './card-component';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAllListsWithBoardId, addNewList, fetchChecklist, addChecklists, deleteChecklist, addCheckitem, deleteCheckitem } from "../actions"

class ListComponent extends React.Component {
  state = {
    boardID : this.props.match.params.id,
  };

  componentDidMount() {
    this.props.showAllListswithBoardID(this.state.boardID);
  }
 
  onOpenModal = cardDetails => {
    this.setState({ cardID : cardDetails.id , open: true });
    this.props.fetchChecklist(cardDetails.id);
    console.log(this.props.checklists);
    console.log(this.state.cardID);
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
        handleAddList = {(name) => this.props.handleAddList(this.state.boardID, name)}
         />
         
        <ModalComponent
          open={this.state.open}
          closeModal={this.onCloseModal}
          checklistsDetails={this.props.checklists}
          handleAddChecklist={(checklistName) => this.props.handleAddChecklist(this.state.cardID,checklistName)}
          handleAddCheckItem={(checkList, checkitemName) => this.props.handleAddCheckItem(checkList, checkitemName)}
          handleDeleteCheckItem={(checkLists) => this.props.handleDeleteCheckItem(checkLists)}
          handleUpdateCheckItem={this.handleUpdateCheckItem}
          handleDeleteCheckList={(checklistID) => this.props.handleDeleteCheckList(checklistID)}
        />
      </div>
    );
  }
}

ListComponent.propTypes = {
  showAllListswithBoardID: PropTypes.func.isRequired,
  allLists: PropTypes.array.isRequired,
  newList: PropTypes.object
};
const mapStateToProps = state => ({
  allLists: state.ListReducer.lists,
  checklists : state.ModalReducres.checklists
});

const mapDispatchToProps = dispatch => ({
  showAllListswithBoardID : BoardID => dispatch(fetchAllListsWithBoardId(BoardID)), 
  handleAddList : (BoardID, listName) => dispatch(addNewList(BoardID, listName)),
  fetchChecklist : (cardID) => dispatch(fetchChecklist(cardID)),
  handleAddChecklist : (cardID, checklistName) => dispatch(addChecklists(cardID, checklistName)),
  handleDeleteCheckList : (checkListID) => dispatch(deleteChecklist(checkListID)),
  handleAddCheckItem : (checkList, checkitemName) => dispatch(addCheckitem(checkList, checkitemName)),
  handleDeleteCheckItem : (checkList) => dispatch(deleteCheckitem(checkList))
})
export default connect(mapStateToProps, mapDispatchToProps)(ListComponent);
