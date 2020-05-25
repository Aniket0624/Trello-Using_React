class ChecklistAPI {
    async fetchChecklistByCardID(cardID) {
        const response = await fetch(`https://api.trello.com/1/cards/${cardID}/checklists?checkItems=all&checkItem_fields=name%2CnameData%2Cpos%2Cstate&filter=all&fields=all&key=0a888fcd467afb859a113e18472a165a&token=f287454275494e79765ee9355d8d4678edffe624889a85aa91fa254571b4bb14`);
        return await response.json();
    }

    async addCheckListToCard(cardID, checklistName) {
        const response = await fetch(`https://api.trello.com/1/cards/${cardID}/checklists?name=${checklistName}&key=0a888fcd467afb859a113e18472a165a&token=f287454275494e79765ee9355d8d4678edffe624889a85aa91fa254571b4bb14`, { method: 'POST' });
        return await response.json();
    }

    async deleteChecklist(checklistID){
        fetch(
            `https://api.trello.com/1/checklists/${checklistID}?key=0a888fcd467afb859a113e18472a165a&token=f287454275494e79765ee9355d8d4678edffe624889a85aa91fa254571b4bb14`,
            { method: 'DELETE' }
          );
    }
}

export default ChecklistAPI;