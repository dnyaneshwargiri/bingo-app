import React from 'react';
import { Card, Row, Col, message } from 'antd';
import { useBingoStore } from './../store/bingo.store';
import './bingoCard.css';

const BingoCard: React.FC = () => {
  const { phrases, selectedCells, toggleCell, checkWin } = useBingoStore();

  const renderCell = (index: number) => (
    <Col span={4} key={index} onClick={() => handleCellClick(index)}>
      <Card
        bordered={selectedCells[index]}
        className={`bingo-cell ${selectedCells[index] ? 'selected' : ''} ${
          index === 12 ? 'middle-circle' : ''
        }`}
      >
        {index === 12 ? 'CONF CALL 😊 BINGO' : phrases[index]}
      </Card>
    </Col>
  );

  const handleCellClick = (index: number) => {
    toggleCell(index);

    if (checkWin()) {
      message.success("Bingo! You've won!");
    }
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
