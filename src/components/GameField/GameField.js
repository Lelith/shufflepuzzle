import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Shapes from './Shapes';
import GameCard from '../GameCard/GameCard';
import GameCards from '../GameCards/GameCards';
import Countdown from '../Countdown/Countdown';
import ProgressBar from '../ProgressBar/ProgressBar';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

class GameField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      match: 'ongoing',
      playingShapes: [],
      secondsElapsed: 0,
      roundSummary: 'less than one second',
    };

    this.startRound = this.startRound.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.tick = this.tick.bind(this);
    this.checkMatch = this.checkMatch.bind(this);
  }

  componentDidMount() {
    this.startRound();
    // choose goal shape
    // choose (1 + rounds played) other shapes to fill the game field
    // add random paddings ( 0 - 20px) and widths (20px - 200px) to the shapes
    // render game cards with prepared array of shape objects
    // show goal shape für 10 seconds
    // start timer 60
    // user clicks on right shape --> save time as result for this round
    // user clicks on wrong shape --> save 'missed' as result for this round
    // user runs out of time --> save missed as result for this round
  }

  componentWillReceiveProps() {
    this.startRound();
  }

  setPlayingShapes() {
    const { roundsPlayed } = this.props;
    const amountOfShapes = 3 + roundsPlayed;

    const playingCards = Shapes.slice(0, amountOfShapes);

    // choose shape to find
    const goalShape = getRandomInt(0, amountOfShapes - 1);

    // shuffle playingCards
    for (let i = playingCards.length - 1; i > 0; i -= 1) {
      const j = getRandomInt(0, i + 1);
      [playingCards[i], playingCards[j]] = [playingCards[j], playingCards[i]];
    }

    // add function and set isGoal
    playingCards.map((card, index) => {
      card.isGoal = index === goalShape;
      card.onClick = this.checkMatch;
      card.style = {
        width: getRandomInt(24, 500),
        padding: getRandomInt(0, 20),
      };
    });

    this.setState({
      goalShape: playingCards[goalShape].src,
      playingShapes: playingCards,
      showGoal: true,
    });

    setTimeout(() => {
      this.setState({ showGoal: false, showCards: true });
      this.startTimer();
    }, 10000);
  }

  startRound() {
    this.setPlayingShapes();
  }


  checkMatch(event) {
    // stop timer and save time.
    this.stopTimer();
    const { roundSummary } = this.state;
    const { callBack } = this.props;
    const { target } = event;
    let result = 'undefined';

    if (target.value === 'true') {
      // you won
      result = roundSummary;
      this.setState({
        showCards: false,
        match: 'won',
      });
    } else {
      // you loose
      result = 'missed';
      this.setState({
        showCards: false,
        match: 'lost',
      });
    }
    setTimeout(() => {
      callBack(result);
    }, 1000);
  }

  startTimer() {
    this.interval = setInterval(this.tick, 1000);
  }

  stopTimer() {
    clearInterval(this.interval);
    const { secondsElapsed } = this.state;
    this.setState({
      roundSummary: secondsElapsed,
    }, this.setState({ secondsElapsed: 0 }));
  }

  tick() {
    const { callBack } = this.props;
    let { secondsElapsed } = this.state;
    secondsElapsed += 1;

    this.setState({
      secondsElapsed,
    });

    if (secondsElapsed >= 60) {
      this.stopTimer();
      callBack('missed');
    }
  }

  render() {
    const {
      showGoal,
      goalShape,
      showCards,
      playingShapes,
      match,
    } = this.state;

    const {
      roundsPlayed,
      roundsToPlay,
    } = this.props;

    const progress = Math.floor((roundsPlayed / roundsToPlay) * 100);

    return (
      <div className="gameField">
        <h2>Choose the right card</h2>
        <ProgressBar percentage={progress} />
        {showGoal && (
          <div className="gameField__content">
            <h3>This is the card you have to find.</h3>
            <Countdown secondsRemaining={10} />
            <GameCard
              isGoal
              shape={goalShape}
            />
          </div>
        )}
        { showCards && (
          <div className="gameField__content">
            <GameCards
              playingShapes={playingShapes}
            />
          </div>
        )}
        { match === 'won' && (
          <div className="gameField__content">
            <h2>That was the right symbol!</h2>
          </div>
        )}
        { match === 'lost' && (
          <div className="gameField__content">
            <h2>Sorry you lost this round</h2>
          </div>
        )}
      </div>
    );
  }
}

GameField.propTypes = {
  roundsPlayed: PropTypes.number.isRequired,
  roundsToPlay: PropTypes.number.isRequired,
  callBack: PropTypes.func.isRequired,
};

export default GameField;
