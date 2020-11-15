import React, { FC, PropsWithChildren, useCallback, memo } from 'react';
import useGameData from '../../hooks/use-game-data.hook';

interface IAnswersProps {
  question: string;
  answer: string;
  answers: Record<string, any>[];
  total: number;
}

const Answers: FC<PropsWithChildren<IAnswersProps>> = (
  props: IAnswersProps,
) => {
  const { question = '', answers = [], answer = '', total = 0 } = props;
  const { setLevelAction, gameStopAction } = useGameData();

  const checkAnswer = useCallback(
    (value: string) => {
      if (value === answer) {
        if (typeof setLevelAction !== 'undefined') {
          setLevelAction(total);
        }
      } else if (typeof gameStopAction !== 'undefined') {
        gameStopAction();
      }
    },
    [answer, gameStopAction, setLevelAction, total],
  );

  return (
    <>
      <h1 className="gaming__title">{question}</h1>
      <div className="answer">
        {answers.map(({ name, value }) => (
          <button
            className="choise__answer"
            key={name}
            onClick={() => checkAnswer(value)}
          >
            <span className="answer-span">{value.toUpperCase()}</span>
            {name}
          </button>
        ))}
      </div>
    </>
  );
};

export default memo(Answers);
