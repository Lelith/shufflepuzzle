import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GameForm from './components/GameForm/GameForm';
import GameField from './components/GameField/GameField';
import GameResults from './components/GameResults/GameResults';

require('./style/base.css');


class App extends Component {
  constructor(props) {
    super(props);

    this.startGame = this.startGame.bind(this);
    this.finishGame = this.finishGame.bind(this);
    this.resetGame = this.resetGame.bind(this);
    this.setRounds = this.setRounds.bind(this);
    this.finishRound = this.finishRound.bind(this);
  }

  setRounds(event) {
    const { setRoundsToPlay } = this.props;
    const { target } = event;
    let newRounds = target.value;
    if (newRounds !== '') {
      if (newRounds > 10) {
        newRounds = 10;
      } else if (newRounds < 3) {
        newRounds = 3;
      }
      newRounds = parseInt(newRounds, 10);
    }


    setRoundsToPlay(newRounds);
  }

  finishRound(newResult) {
    const {
      roundResults,
      addResult,
      roundsToPlay,
      setRoundsPlayed,
    } = this.props;
    let { roundsPlayed } = this.props;

    roundResults.push(newResult);
    addResult(roundResults);

    if (roundsPlayed < (roundsToPlay - 1)) {
      roundsPlayed += 1;
      setRoundsPlayed(roundsPlayed);
    } else {
      this.finishGame();
    }
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
    const { setGameStatus, setRoundsPlayed, addResult } = this.props;
    const newStatus = 'new_game';
    setGameStatus(newStatus);
    setRoundsPlayed(0);
    addResult([]);
  }

  render() {
    const {
      gameStatus,
      roundsPlayed,
      roundsToPlay,
      roundResults,
    } = this.props;
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
              <GameForm
                onSubmit={this.startGame}
                onChange={this.setRounds}
                roundsToPlay={roundsToPlay}
              />
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
              roundsPlayed={roundsPlayed}
              roundsToPlay={roundsToPlay}
              callBack={this.finishRound}
            />
          </div>
          )}

          {gameStatus === 'finished'
          && (
          /*
          show game field
          */
          <div>
            <GameResults results={roundResults} />
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
  roundsToPlay: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  roundsPlayed: PropTypes.number.isRequired,
  setGameStatus: PropTypes.func.isRequired,
  addResult: PropTypes.func.isRequired,
  setRoundsToPlay: PropTypes.func.isRequired,
  setRoundsPlayed: PropTypes.func.isRequired,
};

export default App;
