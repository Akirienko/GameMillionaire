import { useCallback, useReducer } from 'react';
import data from '../../assets/json/question.json';

const SET_LEVEL_ACTION_TYPE = 'SET_LEVEL_ACTION_TYPE';
const GAME_START = 'GAME_START';
const GAME_OVER = 'GAME_OVER';

export const initialState = {
  data,
  level: 1,
  total: 500,
  gameOver: false,
  gameStart: false,
};

const gameReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_LEVEL_ACTION_TYPE:
      return {
        ...state,
        total: action.payload,
        level: state.level + 1,
      };
    case GAME_START:
      return {
        ...state,
        level: 1,
        total: 500,
        gameStart: true,
      };
    case GAME_OVER:
      return {
        ...state,
        level: 1,
        gameStart: false,
        gameOver: true,
      };
    default:
      return state;
  }
};

const setLevel = (total: number) => ({
  type: SET_LEVEL_ACTION_TYPE,
  payload: total,
});

const start = () => ({
  type: GAME_START,
});

const stop = () => ({
  type: GAME_OVER,
});

const useGameState = () => {
  const [state, dispatch] = useReducer(gameReducer, initialState);
  const gameStartAction = useCallback(() => dispatch(start()), [dispatch]);
  const gameStopAction = useCallback(() => dispatch(stop()), [dispatch]);
  const setLevelAction = useCallback(
    (total: number) => dispatch(setLevel(total)),
    [dispatch],
  );

  return {
    state,
    setLevelAction,
    gameStartAction,
    gameStopAction,
  };
};

export type RootState = ReturnType<typeof useGameState>;

export default useGameState;
