import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@chakra-ui/core";
import { Text } from "@chakra-ui/core";

const IndividualBoard = props => {
    return (
        <div class="card" style = {{width : "25%", marginTop : "2em", borderRadius : "0.5em"}}>
            <div class="card-body">
                <Text fontSize="4xl" class="card-title" style= {{textAlign : "center"}} key = {props.BoardDetails.id}>  {props.BoardDetails.name} </Text>
                <hr></hr>
                <Link to = {`/board/${props.BoardDetails.id}`}> 
                    <Button rightIcon="arrow-forward" variantColor="blue" style = {{float : "right", marginTop : "1em"}} > Go to Board </Button> </Link>
            </div>
        </div>
    )
}

export default IndividualBoard;