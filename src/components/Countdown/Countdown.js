import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Countdown extends Component {
  constructor(props) {
    super(props);
    const { secondsRemaining } = props;
    this.state = {
      secondsRemaining,
    };

    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    let { secondsRemaining } = this.state;
    secondsRemaining -= 1;

    this.setState({
      secondsRemaining,
    });

    if (secondsRemaining <= 0) {
      clearInterval(this.interval);
    }
  }

  render() {
    const { secondsRemaining } = this.state;
    return (
      <div className="timer">{secondsRemaining}</div>
    );
  }
}

Countdown.propTypes = {
  secondsRemaining: PropTypes.number,
};

Countdown.defaultProps = {
  secondsRemaining: 10,
};

export default Countdown;
