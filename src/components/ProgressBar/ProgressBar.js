import React from 'react';
import PropTypes from 'prop-types';

require('./ProgressBar.css');

const ProgressBar = (props) => {
  const { percentage } = props;

  const Filler = <div className="progressBar__filler" style={{ width: `${percentage}%` }} />;


  return (
    <div className="progressBar">
      {Filler}
    </div>
  );
};

ProgressBar.propTypes = {
  percentage: PropTypes.number,
};

ProgressBar.defaultProps = {
  percentage: 0,
};

export default ProgressBar;
