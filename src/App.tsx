import React from 'react';
import BingoCard from './components/bingoCard';
import BingoAlert from './components/bingoAlert';
import { Button } from 'antd';
import { useBingoStore } from './store/bingo.store';
import './App.css';

const App: React.FC = () => {
  const resetGame = useBingoStore((state) => state.resetGame);
  const newGame = useBingoStore((state) => state.newGame);

  return (
    <div className="main-container">
      <div className="header">
        <h2 className="app-title">Bingo Bonanza</h2>
        <div className="button-group">
          <Button
            type="primary"
            style={{
              background: '#f9f9f9',
              borderColor: '#e0e0e0',
              color: '#000',
            }}
            onClick={newGame}
          >
            New Game ➕
          </Button>
          <Button
            type="default"
            variant="outlined"
            onClick={resetGame}
            style={{
              marginLeft: '10px',
              background: '#fff',
              borderColor: '#e0e0e0',
              color: '#000',
            }}
          >
            Reset Game 🔄
          </Button>
        </div>
      </div>
      <BingoAlert />
      <BingoCard />
    </div>
  );
};

export default App;
