import React from 'react';
import GameContextProvider from './context/game-context/GameContextProvider';
import GameContainer from './container/GameContainer';

function App() {
  return (
    <GameContextProvider>
      <GameContainer />
    </GameContextProvider>
  );
}

export default App;
