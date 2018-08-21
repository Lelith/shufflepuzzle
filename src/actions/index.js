export const SET_GAME_STATUS = 'SET_GAME_STATUS';

// Game actions
export const setGameStatus = gameStatus => ({
  type: SET_GAME_STATUS,
  gameStatus,
});
