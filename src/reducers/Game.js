import * as types from '../actions';

const initialState = {
  gameStatus: 'new_game',
  roundResults: [],
  roundsToPlay: 3,
  roundsPlayed: 0,
};

function reducerGame(state = initialState, action) {
  switch (action.type) {
    case types.SET_GAME_STATUS: {
      const { gameStatus } = action;
      return {
        ...state,
        gameStatus,
      };
    }
    case types.ADD_RESULT: {
      const { roundResults } = action;
      return {
        ...state,
        roundResults,
      };
    }
    case types.SET_ROUNDS_PLAYED: {
      const { roundsPlayed } = action;
      return {
        ...state,
        roundsPlayed,
      };
    }
    case types.SET_ROUNDS_TOPLAY: {
      const { roundsToPlay } = action;
      return {
        ...state,
        roundsToPlay,
      };
    }
    default:
      return state;
  }
}


export default reducerGame;
