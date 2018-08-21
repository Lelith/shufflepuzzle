import * as actions from './index';

describe('actions', () => {
  it('should update the game status', () => {
    const gameStatus = 'playing';
    const expectedAction = {
      type: 'SET_GAME_STATUS',
      gameStatus,
    };
    expect(actions.setGameStatus(gameStatus)).toEqual(expectedAction);
  });

  it('should add new Results', () => {
    const roundResults = [2, 'missed'];
    const expectedAction = {
      type: 'ADD_RESULT',
      roundResults,
    };
    expect(actions.addResult(roundResults)).toEqual(expectedAction);
  });

  it('should set how many rounds a user can play', () => {
    const roundsToPlay = 5;
    const expectedAction = {
      type: 'SET_ROUNDS_TOPLAY',
      roundsToPlay,
    };
    expect(actions.setRoundsToPlay(roundsToPlay)).toEqual(expectedAction);
  });

  it('should uodate how many rounds are already played', () => {
    const roundsPlayed = 2;
    const expectedAction = {
      type: 'SET_ROUNDS_PLAYED',
      roundsPlayed,
    };
    expect(actions.setRoundsPlayed(roundsPlayed)).toEqual(expectedAction);
  });
});
