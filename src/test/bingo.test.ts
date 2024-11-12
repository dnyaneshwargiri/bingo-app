import { act } from 'react';
import { useBingoStore } from '../store/bingo.store';

describe('Bingo Store', () => {
  beforeEach(() => {
    // Reset store before each test
    act(() => {
      useBingoStore.getState().resetGame();
    });
  });

  test('initial state should be set correctly', () => {
    const {
      phrases,
      selectedCells,
      hasWon,
      achievedCombinations,
      allCellsSelected,
    } = useBingoStore.getState();
    expect(phrases).toHaveLength(25);
    expect(selectedCells[12]).toBe(true);
    expect(selectedCells.filter((cell) => cell).length).toBe(1);
    expect(hasWon).toBe(false);
    expect(achievedCombinations).toHaveLength(0);
    expect(allCellsSelected).toBe(false);
  });

  test('toggleCell should toggle the cell state', () => {
    act(() => {
      useBingoStore.getState().toggleCell(0);
    });
    expect(useBingoStore.getState().selectedCells[0]).toBe(true);

    act(() => {
      useBingoStore.getState().toggleCell(0);
    });
    expect(useBingoStore.getState().selectedCells[0]).toBe(false);
  });

  test('checkWin should detect a winning row combination', () => {
    act(() => {
      [0, 1, 2, 3, 4].forEach((index) =>
        useBingoStore.getState().toggleCell(index)
      );
      useBingoStore.getState().checkWin();
    });
    expect(useBingoStore.getState().hasWon).toBe(true);
  });

  test('checkWin should detect a winning column combination', () => {
    act(() => {
      [0, 5, 10, 15, 20].forEach((index) =>
        useBingoStore.getState().toggleCell(index)
      );
      useBingoStore.getState().checkWin();
    });
    expect(useBingoStore.getState().hasWon).toBe(true);
  });

  test('checkWin should detect a diagonal winning combination', () => {
    act(() => {
      [0, 6, 12, 18, 24].forEach((index) =>
        useBingoStore.getState().toggleCell(index)
      );
      useBingoStore.getState().checkWin();
    });
    expect(useBingoStore.getState().hasWon).toBe(false);
  });

  test('allCellsSelected should be true when all cells are selected', () => {
    act(() => {
      Array.from({ length: 25 }, (_, index) => index).forEach((index) => {
        if (index !== 12) useBingoStore.getState().toggleCell(index);
      });
      useBingoStore.getState().checkWin();
    });
    expect(useBingoStore.getState().allCellsSelected).toBe(true);
  });

  test('resetGame should reset the state correctly', () => {
    act(() => {
      useBingoStore.getState().toggleCell(0);
      useBingoStore.getState().checkWin();
      useBingoStore.getState().resetGame();
    });

    const { selectedCells, hasWon, achievedCombinations } =
      useBingoStore.getState();
    expect(selectedCells[0]).toBe(false);
    expect(selectedCells[12]).toBe(true);
    expect(selectedCells.filter((cell) => cell).length).toBe(1);
    expect(hasWon).toBe(false);
    expect(achievedCombinations).toHaveLength(0);
  });

  test('newGame should shuffle phrases and reset the state', () => {
    const initialPhrases = [...useBingoStore.getState().phrases];
    act(() => {
      useBingoStore.getState().newGame();
    });
    const { phrases, selectedCells, hasWon, achievedCombinations } =
      useBingoStore.getState();
    expect(phrases).not.toEqual(initialPhrases);
    expect(selectedCells[12]).toBe(true);
    expect(selectedCells.filter((cell) => cell).length).toBe(1);
    expect(hasWon).toBe(false);
    expect(achievedCombinations).toHaveLength(0);
  });
});
