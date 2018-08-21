import React from 'react';
import PropTypes from 'prop-types';

const GameResults = (props) => {
  const {
    results,
  } = props;

  const resultList = results.map((result, index) => (
    <li key={result}>
      <span>Round {index + 1}: </span>
      {result !== 'missed' ? `${result}s` : result }
    </li>
  ));

  return (
    <div className="gameResults">
      <h2>See your Highscore</h2>
      <ul>
        {resultList}
      </ul>
    </div>
  );
};

GameResults.propTypes = {
  results: PropTypes.array.isRequired,
};

export default GameResults;
