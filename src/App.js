import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GameField from './components/GameField/GameField';

require('./style/base.css');


class App extends Component {
  constructor(props) {
    super(props);

    this.startGame = this.startGame.bind(this);
    this.finishGame = this.finishGame.bind(this);
    this.resetGame = this.resetGame.bind(this);
    this.finishRound = this.finishRound.bind(this);
  }

  startGame() {
    const { setGameStatus } = this.props;
    const newStatus = 'playing';
    setGameStatus(newStatus);
  }

  finishGame() {
    const { setGameStatus } = this.props;
    const newStatus = 'finished';
    setGameStatus(newStatus);
  }

  resetGame() {
    const { setGameStatus } = this.props;
    const newStatus = 'new_game';
    setGameStatus(newStatus);
  }

  finishRound(newResult) {
    const { roundResults, addResult } = this.props;
    roundResults.push(newResult);
    addResult(roundResults);
  }

  render() {
    const { gameStatus } = this.props;
    return (
      <div className="App">
        <h1>Shuffle Puzzle</h1>
        <div>
          {gameStatus === 'new_game'
            && (
            /*
              show form to start game
            */
            <div>
              <h2>start new game</h2>
              <button onClick={this.startGame} type="button">Start Game</button>
            </div>
            )}

          {gameStatus === 'playing'
          && (
          /*
          show game field
          */
          <div>
            <h2>play game</h2>
            <GameField
              roundsPlayed={0}
              callBack={this.finishRound}
            />
            <button onClick={this.finishGame} type="button">Finish the Game</button>
          </div>
          )}

          {gameStatus === 'finished'
          && (
          /*
          show game field
          */
          <div>
            <h2>show results</h2>
            <button onClick={this.resetGame} type="button">Start a new Game</button>
          </div>
          )}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  gameStatus: PropTypes.oneOf(['new_game', 'playing', 'finished']).isRequired,
  roundResults: PropTypes.array.isRequired,
  setGameStatus: PropTypes.func.isRequired,
  addResult: PropTypes.func.isRequired,
};

export default App;
