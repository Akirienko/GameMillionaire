import React, { FC, PropsWithChildren } from 'react';

import Button from '../../shared/components/Button/Button';
import './GameStart.style.css';
import image from './hand.png';

interface IGameStartProps {
  gameStartAction: any;
}

const GameStart: FC<PropsWithChildren<IGameStartProps>> = (
  props: IGameStartProps,
) => {
  const { gameStartAction } = props;
  console.log(gameStartAction, 'rendered');

  return (
    <>
      <section className="start-game">
        <img src={image} alt="hand" className="start-game__img" />
        <div className="start-game__content">
          <p className="star-game__title">Who wants to be a millionaire?</p>
          <Button
            type="button"
            className="start-game__btn"
            onClick={gameStartAction}
          >
            Start
          </Button>
        </div>
      </section>
    </>
  );
};

export default GameStart;
