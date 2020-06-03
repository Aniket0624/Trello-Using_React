import React from 'react';
import IndividualBoard from './individual-board';
import { connect } from 'react-redux';
// import { requestGetAllBoards } from '../actions';
import * as Action from '../actions';

class BoardComponent extends React.PureComponent {

  componentDidMount() {
    let { dispatch } = this.props;
    let action = Action.requestGetAllBoards();
    dispatch(action);
  }

 render() {
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

export default connect(mapStateToProps)(BoardComponent);
