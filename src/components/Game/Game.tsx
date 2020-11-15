import React, { FC, PropsWithChildren, useCallback, useState } from 'react';
import Coints from '../Coints/Coints';
import Answers from '../Answers/Answers';

import './Game.css';
import useMedia from '../../hooks/use-media';
import Burger from '../../shared/components/Burger/Burger';

interface IGameProps {
  data: Record<string, any>[] | undefined;
  level: number | undefined;
}

const Game: FC<PropsWithChildren<IGameProps>> = (props: IGameProps) => {
  const { data = [], level } = props;
  const founded = data.find((item) => item.level === level);
  const media = useMedia('(max-width: 820px)');
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);

  const isMobile = media && (
    <>
      <button className="burger" onClick={handleOpen}>
        <div className="line line1" />
        <div className="line line2" />
        <div className="line line3" />
      </button>
      <Burger open={open} anchor="right" onClose={handleClose}>
        <Coints data={data} level={level} />
      </Burger>
    </>
  );
  const isDesktop = !media && <Coints data={data} level={level} />;

  return (
    <div className="overlay">
      <section className="game">
        <div className="gaming">
          <Answers
            question={founded?.question}
            answers={founded?.answers}
            answer={founded?.answer}
            total={founded?.rightAnswer}
          />
        </div>
        {isDesktop}
        {isMobile}
      </section>
    </div>
  );
};

export default Game;
