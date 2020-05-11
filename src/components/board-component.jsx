import React from 'react';
// import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
// import apiFetcher from "./apiFetcher"


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
  return (
    <div className = "Boards">
        {this.state.data.map(el => (
          <div class="card" style = {{width : "25%", marginTop : "2em", borderRadius : "0.5em"}}>
            <div class="card-body">
          <h1 class="card-title" style= {{textAlign : "center"}} key = {el.id}>  {el.name}   </h1>
            <hr></hr>
          <Link to = {`/board/${el.id}`}> 
          <button style = {{float : "right"}} class = "btn btn-success"> Go to Board </button> </Link>
     
            </div>
          </div>
        ))}
    </div>
  );
}
}

export default BoardComponent;
