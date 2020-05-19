import React from 'react';
import IndividualBoard from './individual-board';

class BoardComponent extends React.PureComponent {
  constructor() {
    super();
    this.state = { data: [] };
  }
  componentDidMount() {
    const url = `https://api.trello.com/1/members/me/boards?key=0a888fcd467afb859a113e18472a165a&token=f287454275494e79765ee9355d8d4678edffe624889a85aa91fa254571b4bb14`;
    fetch(url, {
      method: 'Get'
    })
      .then(res => res.json())
      .then(json => this.setState({ data: json }));
  }


render() {
  if (this.state.data.length === 0) {
    return (
      <div class="d-flex align-items-center">
      <strong>Loading...</strong>
      <div class="spinner-border ml-auto" role="status" aria-hidden="true"></div>
    </div>
  )
  }
  var allBoards = this.state.data.map(el => {
        return <IndividualBoard key = {el.id} BoardDetails = {el} />
  })
  return (
    <div className = "Boards">
      {allBoards}
    </div>
  )
}
}

export default BoardComponent;
