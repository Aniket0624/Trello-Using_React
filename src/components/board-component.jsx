import React from 'react';
import IndividualBoard from './individual-board';
import { connect } from 'react-redux';
import { fetchAllBoards } from '../actions';

class BoardComponent extends React.PureComponent {

  componentDidMount() {
    this.props.fetchBoards();
  }

 render() {
  console.log(this.props.allBoards);
  if (this.props.allBoards.boards.length === 0) {
    return (
      <div class="d-flex align-items-center">
      <strong>Loading...</strong>
      <div class="spinner-border ml-auto" role="status" aria-hidden="true"></div>
    </div>
  )
  }
  var allBoardsBody = this.props.allBoards.boards.map(el => {
        return <IndividualBoard key = {el.id} BoardDetails = {el} />
  })
  return (
    <div className = "Boards">
      {allBoardsBody}
    </div>
  )
}
}
const mapStateToProps = state => ({
  allBoards: state.BoardReducers
});

const mapDispatchToProps = dispatch => ({
  fetchBoards :() => dispatch(fetchAllBoards())
})

export default connect(mapStateToProps, mapDispatchToProps)(BoardComponent);
