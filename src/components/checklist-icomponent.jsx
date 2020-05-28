import React, { Component } from 'react';
import FormComponent from "./form-component";
import CheckitemComponent from './checkitem-component';
import { Box } from "@chakra-ui/core";
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/core";

class ChecklistComponent extends Component {
  render() {
    return (
      <Accordion allowMultiple >
         <AccordionItem >
            <AccordionHeader >
               <Box flex="1" textAlign="left" style = {{backgroundColor : "white", borderRadius : "0.5em", padding : "1em"}}>{this.props.checklistDetails.name}</Box>
               <AccordionIcon />
              <button
                  className="btn btn-danger"
                  onClick={() => {
                    this.props.handleDeleteCheckList(this.props.checklistDetails.id);
                  }}
                >
                  <i className='fa fa-trash'></i>
                </button>
            </AccordionHeader>
          <AccordionPanel pb={4}>
              {this.props.checklistDetails.checkItems.map(checkItem => (
                <CheckitemComponent
                  key={checkItem.id}
                  checkItemDetails={checkItem}
                  handleUpdateCheckItem={this.props.handleUpdateCheckItem}
                  handleDeleteCheckItem={this.props.handleDeleteCheckItem}
                  checklistDetails={this.props.checklistDetails}
                />
              ))}
          <FormComponent 
                  formName = "Add CheckItems"
                  handleAddCheckItem = {this.props.handleAddCheckItem}
                  checkList = {this.props.checklistDetails} />
           </AccordionPanel>
        </AccordionItem>
    </Accordion>
    );
  }
}

export default ChecklistComponent;
