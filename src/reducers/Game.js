import * as types from '../actions';

const initialState = {
  gameStatus: 'new_game',
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
    default:
      return state;
  }
}


export default reducerGame;
