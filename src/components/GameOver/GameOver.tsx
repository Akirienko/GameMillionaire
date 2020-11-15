import React, { FC, PropsWithChildren } from 'react';
import Button from '../../shared/components/Button/Button';
import toCurrency from '../../lib/to-currency';

import './GameOver.style.css';
import image from './hand.png';

interface IGameOverProps {
  total: number | undefined;
  gameStartAction: any;
}

const GameOver: FC<PropsWithChildren<IGameOverProps>> = (
  props: IGameOverProps,
) => {
  const { total, gameStartAction } = props;
  return (
    <section className="finish-game">
      <img src={image} alt="hand" className="finish-game__img" />
      <div className="finish-game__content">
        <span>Total score:</span>
        <p className="finish-game__title">{toCurrency(total)} earned</p>
        <Button
          type="button"
          className="finish-game__btn"
          onClick={gameStartAction}
        >
          Try again
        </Button>
      </div>
    </section>
  );
};

export default GameOver;
