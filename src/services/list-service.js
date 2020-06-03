class ListsAPI {
    async fetchAllListsWithBoardsId(BoardID){
        const URL = `https://api.trello.com/1/boards/${BoardID}?lists=open&fields=all&&key=0a888fcd467afb859a113e18472a165a&token=f287454275494e79765ee9355d8d4678edffe624889a85aa91fa254571b4bb14`
        const res = await fetch(URL, {
            method: 'Get'
          });
        return await res.json();
    }
    addNewList = async (BoardID, listName) => {
        const url = `https://api.trello.com/1/lists?name=${listName}&idBoard=${BoardID}&pos=bottom&key=0a888fcd467afb859a113e18472a165a&token=f287454275494e79765ee9355d8d4678edffe624889a85aa91fa254571b4bb14`;
        const res = await fetch(url, {
            method: 'POST'
        });
        return await res.json();
    }
}

export default ListsAPI;