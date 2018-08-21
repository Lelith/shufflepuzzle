import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Shapes from './Shapes';
import GameCard from '../GameCard/GameCard';
import GameCards from '../GameCards/GameCards';
import Countdown from '../Countdown/Countdown';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

class GameField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      match: false,
      playingShapes: [],
    }

    this.checkMatch = this.checkMatch.bind(this);
  }

  componentDidMount() {
    this.setPlayingShapes();
    this.startGame();
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
    });
  }

  startGame() {
    this.setState({ showGoal: true });
    setTimeout(() => {
      this.setState({ showGoal: false, showCards: true });
      // this.startTimer();
    }, 10000);
  }

  checkMatch(event) {
    const { target } = event;
    console.log(target.value);
    if (target.value === 'true') {
      // you won
      console.log('you won');
      this.setState({ match: true });
    } else {
      // you loose
      this.setState({ match: false });
      console.log('you loose');
    }
  }

  render() {
    const {
      showGoal,
      goalShape,
      showCards,
      playingShapes,
    } = this.state;

    return (
      <div className="gameField">
        show my cards
        {showGoal && (
          <div>
            <Countdown secondsRemaining={10} />
            <GameCard
              isGoal
              shape={goalShape}
            />
          </div>
        )}
        { showCards && (
          <div>
            <GameCards
              playingShapes={playingShapes}
            />
          </div>
        )}
      </div>
    );
  }
}

GameField.propTypes = {
  roundsPlayed: PropTypes.number.isRequired,
};

export default GameField;
