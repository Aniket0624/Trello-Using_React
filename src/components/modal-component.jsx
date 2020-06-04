import React from 'react';
import Modal from 'react-responsive-modal';
import ChecklistComponent from './checklist-icomponent';
import FormComponent from './form-component';
import { Text } from "@chakra-ui/core";
const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center'
};

class ModalComponent extends React.Component {

  render() {
    if(this.props.checklistsDetails.length === 0 ){
      return (
        <div style={styles}>
        <Modal open={this.props.open} styles = {{backgroundColor : "grey"}} onClose={this.props.closeModal} classNames = "modal">
        <h2> No CheckList Found</h2>
         <FormComponent 
            formName = "Add Checklist"
            handleAddChecklist = {this.props.handleAddChecklist}/>
           </Modal>
      </div>
      )
    }
    return (
      <div style={styles}>
        <Modal open={this.props.open} onClose={this.props.closeModal} classNames = "modal">
        <Text fontSize="4xl">{this.props.cardName}</Text>
          {this.props.checklistsDetails.map(checkList => (
                <ChecklistComponent
                  key={checkList.id}
                  checklistDetails={checkList}
                  handleAddCheckItem={this.props.handleAddCheckItem}
                  handleUpdateCheckItem={this.props.handleUpdateCheckItem}
                  handleDeleteCheckItem={this.props.handleDeleteCheckItem}
                  handleDeleteCheckList={this.props.handleDeleteCheckList}
                />
              ))}
              <hr></hr>
          <FormComponent 
            formName = "Add Checklist"
            handleAddFunction = {this.props.handleAddChecklist}/>
        </Modal>
      </div>
    );
  }
}
export default ModalComponent;
