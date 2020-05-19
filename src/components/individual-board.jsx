import React from 'react';
import { Link } from 'react-router-dom';

const IndividualBoard = props => {
    return (
        <div class="card" style = {{width : "25%", marginTop : "2em", borderRadius : "0.5em"}}>
            <div class="card-body">
                <h1 class="card-title" style= {{textAlign : "center"}} key = {props.BoardDetails.id}>  {props.BoardDetails.name}   </h1>
                <hr></hr>
                <Link to = {`/board/${props.BoardDetails.id}`}> 
                    <button style = {{float : "right"}} class = "btn btn-success"> Go to Board </button> </Link>
            </div>
        </div>
    )
}

export default IndividualBoard;