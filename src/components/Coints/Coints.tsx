import React, { FC, PropsWithChildren, memo } from 'react';
import toCurrency from '../../lib/to-currency';

interface ICointsProps {
  data: Record<string, any>[] | undefined;
  level: number | undefined;
}

const Coints: FC<PropsWithChildren<ICointsProps>> = (props: ICointsProps) => {
  const { data = [], level } = props;
  const currentLevel = level;

  return (
    <div className="coints">
      {data
        .map(({ rightAnswer, question, level }) => (
          <div
            className={`coint ${level === currentLevel ? 'coint-active' : ''}`}
            key={question.trim()}
          >
            <p>{toCurrency(rightAnswer)}</p>
          </div>
        ))
        .reverse()}
    </div>
  );
};

export default memo(Coints);
