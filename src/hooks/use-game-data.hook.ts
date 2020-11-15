import { useContext } from 'react';
import GameContext from '../context/game-context/game-context';
import { RootState } from '../context/game-context/game.reducer';

const useGameData = () => {
  const { state, gameStartAction, setLevelAction, gameStopAction } = useContext<
    Partial<RootState>
  >(GameContext);
  return {
    total: state?.total,
    level: state?.level,
    gameOver: state?.gameOver,
    gameStart: state?.gameStart,
    data: state?.data,
    gameStartAction,
    setLevelAction,
    gameStopAction,
    ...state,
  };
};

export default useGameData;
