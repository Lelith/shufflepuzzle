export const SET_GAME_STATUS = 'SET_GAME_STATUS';
export const ADD_RESULT = 'ADD_RESULT';
// Game actions
export const setGameStatus = gameStatus => ({
  type: SET_GAME_STATUS,
  gameStatus,
});

export const addResult = roundResults => ({
  type: ADD_RESULT,
  roundResults,
});
