class CheckItemsAPI {
    addCheckitems(checkitemName, checklistID) {
        return fetch(
                `https://api.trello.com/1/checklists/${checklistID}/checkItems?name=${checkitemName}&pos=bottom&checked=false&key=0a888fcd467afb859a113e18472a165a&token=f287454275494e79765ee9355d8d4678edffe624889a85aa91fa254571b4bb14`, {
                    method: 'POST'
                }
            )
            .then(response => response.json())
    }

    deleteCheckitem(checkItemDetails) {
        return fetch(
            `https://api.trello.com/1/checklists/${checkItemDetails.idChecklist}/checkItems/${checkItemDetails.id}?key=0a888fcd467afb859a113e18472a165a&token=f287454275494e79765ee9355d8d4678edffe624889a85aa91fa254571b4bb14`, {
                method: 'DELETE'
            }
        );
    }
    updateCheckitem(idCheckItem, event, idCard) {
        let state;
        if (event.target.checked === true) {
            state = 'complete';
        } else {
            state = 'incomplete';
        }
        fetch(
            `https://api.trello.com/1/cards/${idCard}/checkItem/${idCheckItem}?state=${state}&key=0a888fcd467afb859a113e18472a165a&token=f287454275494e79765ee9355d8d4678edffe624889a85aa91fa254571b4bb14`, {
                method: 'PUT'
            }
        );
    }
}

export default CheckItemsAPI;