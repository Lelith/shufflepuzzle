
import { connect } from 'react-redux';
import App from '../App';
import {
  setGameStatus,
  addResult,
} from '../actions/index';

const mapStateToProps = state => (
  state.reducerGame
);

const mapDispatchToProps = dispatch => ({
  setGameStatus: (gameStatus) => {
    dispatch(setGameStatus(gameStatus));
  },
  addResult: (roundResults) => {
    dispatch(addResult(roundResults));
  },
});

const Game = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default Game;
