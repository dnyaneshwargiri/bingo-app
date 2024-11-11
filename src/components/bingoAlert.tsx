import React, { useEffect } from 'react';
import { Modal } from 'antd';
import { useBingoStore } from '../store/bingo.store';

const BingoAlert: React.FC = () => {
  const { checkWin } = useBingoStore();

  useEffect(() => {
    if (checkWin()) {
      Modal.success({
        title: 'Bingo!',
        content: 'Congratulations, you won!',
      });
    }
  }, [checkWin]);

  return null;
};

export default BingoAlert;
