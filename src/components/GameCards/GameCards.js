import React from 'react';
import PropTypes from 'prop-types';
import GameCard from '../GameCard/GameCard';

require('./GameCards.css');

const GameCards = (props) => {
  const {
    playingShapes,
  } = props;

  return (
    <div className="gameCards">
      {
        playingShapes.map(shape => (
          <GameCard
            isGoal={shape.isGoal}
            onClick={shape.onClick}
            shape={shape.src}
            style={shape.style}
            key={shape.src}
          />
        ))
      }
    </div>
  );
};

GameCards.propTypes = {
  playingShapes: PropTypes.array,
};

GameCards.defaultProps = {
  playingShapes: [],
};

export default GameCards;
