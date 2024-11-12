import React from 'react';
import { Card, Row, Col } from 'antd';
import { useBingoStore } from './../store/bingo.store';
import './bingoCard.css';

const BingoCard: React.FC = () => {
  const { phrases, selectedCells, toggleCell, checkWin } = useBingoStore();

  const renderCell = (index: number) => {
    const isCenterCell = index === 12;
    const phrase = isCenterCell
      ? 'VACATION BINGO 🎉'
      : phrases[index < 12 ? index : index - 1];

    return (
      <Col span={100} key={index} onClick={() => handleCellClick(index)}>
        <Card
          bordered={selectedCells[index]}
          className={`bingo-cell ${selectedCells[index] ? 'selected' : ''} ${
            isCenterCell ? 'middle-circle' : ''
          }`}
        >
          {phrase}
        </Card>
      </Col>
    );
  };

  const handleCellClick = (index: number) => {
    if (index === 12 || selectedCells[index]) return;
    toggleCell(index);
    checkWin();
  };

  return (
    <div className="bingo-card-container">
      <Row gutter={[8, 8]} className="bingo-grid">
        {Array.from({ length: 25 }, (_, index) => renderCell(index))}
      </Row>
    </div>
  );
};

export default BingoCard;
