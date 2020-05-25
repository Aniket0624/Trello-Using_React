import React from 'react';

const IndicidualCard = props => {
    return (
        <div key = {props.CardDetails.id} onClick={() => props.onOpenModal(props.CardDetails)} className='cardDiv'>
            <h6 className='cardName'>{props.CardDetails.name}</h6>
            <div>
              <button
                onClick ={(event) => {event.stopPropagation();props.handleDeleteCard(props.CardDetails.id)}}
                 className='deleteButton btn btn-xsm'>
                <i className='fa fa-trash'></i>
             </button>
            </div>
          </div>
    )
}

export default IndicidualCard