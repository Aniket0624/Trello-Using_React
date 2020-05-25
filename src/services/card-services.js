class CardAPi {
    async fetchAllCards(listID){
    const url = `https://api.trello.com/1/lists/${listID}/cards?key=0a888fcd467afb859a113e18472a165a&token=f287454275494e79765ee9355d8d4678edffe624889a85aa91fa254571b4bb14`;
    const res = await fetch(url, {
        method: 'Get'
      });
      return await res.json();
    }

    addnewCardToList(listID, cardName) {
      return fetch(
        `https://api.trello.com/1/cards?name=${cardName}&idList=${listID}&keepFromSource=all&key=0a888fcd467afb859a113e18472a165a&token=f287454275494e79765ee9355d8d4678edffe624889a85aa91fa254571b4bb14`,
        { method: 'POST' }
      )
        .then(response => response.json())
    }

    deleteCard(cardID) {
      return fetch(
        `https://api.trello.com/1/cards/${cardID}?key=0a888fcd467afb859a113e18472a165a&token=f287454275494e79765ee9355d8d4678edffe624889a85aa91fa254571b4bb14`,
        { method: 'DELETE' }
      );
    }
}

export default CardAPi