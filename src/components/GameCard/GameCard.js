import React from 'react';
import PropTypes from 'prop-types';
import SVG from 'react-inlinesvg';

require('./GameCard.css');

const GameCard = (props) => {
  const {
    isGoal,
    onClick,
    style,
    shape,
  } = props;

  return (
    <div className="gameCard" style={style}>
      <label htmlFor={shape}>
        <input type="radio" id={shape} value={isGoal} name="GameCard" onChange={onClick} />
        <SVG src={shape} />
      </label>
    </div>
  );
};

GameCard.propTypes = {
  isGoal: PropTypes.bool.isRequired,
  shape: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  style: PropTypes.object,
};

GameCard.defaultProps = {
  style: {},
  onClick: () => {},
};

export default GameCard;
