import React from 'react';
import BingoCard from './components/bingoCard';
import BingoAlert from './components/bingoAlert';
import { Button } from 'antd';
import { useBingoStore } from './store/bingo.store';

const App: React.FC = () => {
  const { resetGame } = useBingoStore();

  return (
    <div className="main-container">
      <h1>Video Conference Bingo</h1>
      <BingoAlert />
      <BingoCard />
      <Button type="primary" onClick={resetGame} className="reset-button">
        Reset Game
      </Button>
    </div>
  );
};

export default App;
