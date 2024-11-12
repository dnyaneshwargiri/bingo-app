import { create } from 'zustand';
import { BingoState } from '../types/bingoState';

export const useBingoStore = create<BingoState>((set, get) => ({
  phrases: [
    'Sipping coconut by the beach',
    'Mountain air, no cell signal',
    'Feet in sand, no laptop',
    'Booking a spontaneous flight',
    'Stargazing away from city lights',
    'Lost in a book on the beach',
    'Sunset chases on an island',
    'Biking scenic mountain trails',
    'Exploring hidden street markets',
    'Trying foods with new flavors',
    'Dipping in crystal-clear lake',
    'Petting all stray cats in Greece',
    'Hiking up to a waterfall',
    'Exploring ancient ruins',
    'Windows down on a road trip',
    'Camping under the stars',
    'Lost in a city as a stranger',
    'Snorkeling with colorful fish',
    'Napping in a hammock',
    'Learning a few new words',
    'Completely unplugging from tech',
    'No alarm clocks this week',
    'Poolside swim-up bar time',
    'Selfie at a famous landmark',
    'Just ocean waves, no meetings',
  ],
  selectedCells: Array(25)
    .fill(false)
    .map((_, index) => index === 12),
  hasWon: false,
  achievedCombinations: [],
  allCellsSelected: false,

  toggleCell: (index) =>
    set((state) => {
      const updatedCells = [...state.selectedCells];
      updatedCells[index] = !updatedCells[index];
      return { selectedCells: updatedCells };
    }),

  resetGame: () =>
    set({
      selectedCells: Array(25)
        .fill(false)
        .map((_, index) => index === 12),
      hasWon: false,
      achievedCombinations: [],
    }),

  newGame: () =>
    set({
      phrases: get().shufflePhrases(),
      selectedCells: Array(25)
        .fill(false)
        .map((_, index) => index === 12),
      hasWon: false,
      achievedCombinations: [],
    }),

  shufflePhrases: () => {
    const shuffled = [...get().phrases];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  },

  checkWin: () => {
    const { selectedCells, hasWon, setHasWon, achievedCombinations } = get();

    const winningCombinations = [
      [0, 1, 2, 3, 4],
      [5, 6, 7, 8, 9],
      [10, 11, 12, 13, 14],
      [15, 16, 17, 18, 19],
      [20, 21, 22, 23, 24],
      [0, 5, 10, 15, 20],
      [1, 6, 11, 16, 21],
      [2, 7, 12, 17, 22],
      [3, 8, 13, 18, 23],
      [4, 9, 14, 19, 24],
      [0, 6, 12, 18, 24],
      [4, 8, 12, 16, 20],
    ];

    const allCellsSelected = selectedCells.every(
      (selected, index) => index === 12 || selected
    );

    if (allCellsSelected) {
      set({ allCellsSelected: true });
      return true;
    }

    const newWinningCombination = winningCombinations.find(
      (combination, index) =>
        combination.every((i) => selectedCells[i]) &&
        !achievedCombinations.includes(index)
    );

    if (newWinningCombination) {
      set({
        hasWon: true,
        achievedCombinations: [
          ...achievedCombinations,
          winningCombinations.indexOf(newWinningCombination),
        ],
      });
      return true;
    }

    if (!newWinningCombination && hasWon) {
      setHasWon(false);
    }

    return false;
  },

  setHasWon: (value) => set({ hasWon: value }),
  resetAllCellsSelected: () => set({ allCellsSelected: false }),
}));
