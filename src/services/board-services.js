class BoardsAPI {
    fetchAllBoards(){
        const url = `https://api.trello.com/1/members/me/boards?fields=all&key=0a888fcd467afb859a113e18472a165a&token=f287454275494e79765ee9355d8d4678edffe624889a85aa91fa254571b4bb14`;
        return fetch(url, {
          method: 'Get'
        })
          .then(res => res.json())
    }
    
}

export default BoardsAPI;