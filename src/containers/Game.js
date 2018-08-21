
import { connect } from 'react-redux';
import App from '../App';
import {
  setGameStatus,
} from '../actions/index';

const mapStateToProps = state => (
  state.reducerGame
);

const mapDispatchToProps = dispatch => ({
  setGameStatus: (gameStatus) => {
    dispatch(setGameStatus(gameStatus));
  },
});

const Game = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default Game;
