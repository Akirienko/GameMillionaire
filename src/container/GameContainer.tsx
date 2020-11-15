import React from 'react';
import Game from '../components/Game/Game';
import GameOver from '../components/GameOver/GameOver';

import GameStart from '../components/GameStart/GameStart';
import useGameData from '../hooks/use-game-data.hook';

const GameContainer = () => {
  const {
    data,
    total,
    gameStart,
    gameOver,
    level,
    gameStartAction,
  } = useGameData();

  if (gameStart) {
    return <Game data={data?.questions} level={level} />;
  }

  if (gameOver) {
    return <GameOver total={total} gameStartAction={gameStartAction} />;
  }

  return <GameStart gameStartAction={gameStartAction} />;
};

export default GameContainer;
