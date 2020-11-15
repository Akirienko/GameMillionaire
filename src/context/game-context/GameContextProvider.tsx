import React, { FC, PropsWithChildren, ReactNode } from 'react';
import GameContext from './game-context';
import useGameState from './game.reducer';

interface IGameContextProvider {
  children: ReactNode;
}

const GameContextProvider: FC<PropsWithChildren<IGameContextProvider>> = (
  props: IGameContextProvider,
) => {
  const { children } = props;
  const state = useGameState();

  return <GameContext.Provider value={state}>{children}</GameContext.Provider>;
};

export default GameContextProvider;
