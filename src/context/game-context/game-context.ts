import { createContext } from 'react';
import { RootState } from './game.reducer';

const GameContext = createContext<Partial<RootState>>({});

export default GameContext;
