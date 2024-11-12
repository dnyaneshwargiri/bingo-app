import React, { useEffect } from 'react';
import { Modal } from 'antd';
import { useBingoStore } from '../store/bingo.store';

const BingoAlert: React.FC = () => {
  const { setHasWon, hasWon } = useBingoStore();

  useEffect(() => {
    if (hasWon) {
      Modal.success({
        title: 'Bingo!',
        content: 'Congratulations, you won!',
        onOk: () => setHasWon(false),
      });
    }
  }, [hasWon, setHasWon]);

  return null;
};

export default BingoAlert;
