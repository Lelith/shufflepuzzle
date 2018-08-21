import React from 'react';
import PropTypes from 'prop-types';

const GameForm = (props) => {
  const {
    onSubmit,
    onChange,
    roundsToPlay,
  } = props;


  return (
    <form>
      <input type="number" name="roundsToPlay" onChange={onChange} value={roundsToPlay} min="3" max="10" />
      <button type="button" onClick={onSubmit}> Start game </button>
    </form>
  );
};

GameForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  roundsToPlay: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default GameForm;
