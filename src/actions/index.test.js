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
});
