import * as types from '../actions';

const initialState = {
  gameStatus: 'new_game',
  roundResults: [],
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
    default:
      return state;
  }
}


export default reducerGame;
