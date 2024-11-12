import React, { useEffect } from 'react';
import { Modal } from 'antd';
import { useBingoStore } from '../store/bingo.store';

const BingoAlert: React.FC = () => {
  const {
    hasWon,
    setHasWon,
    allCellsSelected,
    newGame,
    resetAllCellsSelected,
  } = useBingoStore();

  useEffect(() => {
    if (hasWon) {
      Modal.success({
        title: 'Bingo!',
        content: 'Congratulations, you won!',
        onOk: () => setHasWon(false),
      });
    }
  }, [hasWon, setHasWon]);

  useEffect(() => {
    if (allCellsSelected) {
      Modal.info({
        title: 'Bingo!',
        content:
          'All winning combinations are completed. Click OK to start a new game.',
        onOk: () => {
          resetAllCellsSelected();
          newGame();
        },
      });
    }
  }, [allCellsSelected, resetAllCellsSelected, newGame]);

  return null;
};

export default BingoAlert;
