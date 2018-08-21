import React from 'react';
import PropTypes from 'prop-types';
import SVG from 'react-inlinesvg';
import classNames from 'class-names';

require('./GameCard.css');

const GameCard = (props) => {
  const {
    isGoal,
    onClick,
    style,
    shape,
    className,
  } = props;

  const cardClasses = classNames(
    'gameCard',
    className,
  );

  return (
    <div className={cardClasses} style={style}>
      <label htmlFor={shape}>
        <input hidden type="radio" id={shape} value={isGoal} name="GameCard" onChange={onClick} />
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
  className: PropTypes.string,
};

GameCard.defaultProps = {
  style: {},
  onClick: () => {},
  className: '',
};

export default GameCard;
