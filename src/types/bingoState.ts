export interface BingoState {
    phrases: string[];
    selectedCells: boolean[];
    toggleCell: (index: number) => void;
    resetGame: () => void;
    newGame: () => void;
    checkWin: () => boolean;
    hasWon: boolean;
    setHasWon: (value: boolean) => void;
    shufflePhrases: () => string[];
  }