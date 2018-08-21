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
});
