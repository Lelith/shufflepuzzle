
import { connect } from 'react-redux';
import App from '../App';
import {
  setGameStatus,
  addResult,
  setRoundsToPlay,
  setRoundsPlayed,
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
  setRoundsPlayed: (roundsPlayed) => {
    dispatch(setRoundsPlayed(roundsPlayed));
  },
  setRoundsToPlay: (roundsToPlay) => {
    dispatch(setRoundsToPlay(roundsToPlay));
  },
});

const Game = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default Game;
