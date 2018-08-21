export const SET_GAME_STATUS = 'SET_GAME_STATUS';
export const ADD_RESULT = 'ADD_RESULT';
export const SET_ROUNDS_PLAYED = 'SET_ROUNDS_PLAYED';
export const SET_ROUNDS_TOPLAY = 'SET_ROUNDS_TOPLAY';

// Game actions
export const setGameStatus = gameStatus => ({
  type: SET_GAME_STATUS,
  gameStatus,
});

export const addResult = roundResults => ({
  type: ADD_RESULT,
  roundResults,
});

export const setRoundsPlayed = roundsPlayed => ({
  type: SET_ROUNDS_PLAYED,
  roundsPlayed,
});

export const setRoundsToPlay = roundsToPlay => ({
  type: SET_ROUNDS_TOPLAY,
  roundsToPlay,
});
