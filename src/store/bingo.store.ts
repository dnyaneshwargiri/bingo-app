import { create } from 'zustand';
import { BingoState } from '../types/bingoState';

export const useBingoStore = create<BingoState>((set, get) => ({
  phrases: [
    'child noises in the background',
    'Hello, hello?',
    'I need to jump in another call',
    'can everyone go on mute',
    'could you please get closer to the mic',
    'loud painful echo / feedback',
    'Next slide, please',
    'can we take this offline?',
    'is ___ on the call?',
    'Could you share these slides afterwards?',
    'can somebody grant presenter rights?',
    'can you email that to everyone?',
    'sorry, I had problems logging in',
    'animal noises in the background',
    "sorry, I didn't find the conference ID",
    'I was having connection issues',
    "I'll have to get back to you",
    'who just joined?',
    'sorry, something ___ with my calendar',
    'do you see my screen?',
    "let's wait for ___!",
    'You will send the minutes?',
    'sorry, I was on mute.',
    'can you repeat, please?',
  ],
  selectedCells: Array(25).fill(false),
  hasWon: false,

  toggleCell: (index) =>
    set((state) => {
      const updatedCells = [...state.selectedCells];
      updatedCells[index] = !updatedCells[index];
      return { selectedCells: updatedCells };
    }),

  resetGame: () =>
    set({
      selectedCells: Array(25).fill(false),
      hasWon: false,
    }),

  newGame: () =>
    set({
      phrases: get().shufflePhrases(),
      selectedCells: Array(25).fill(false),
      hasWon: false,
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
    const { selectedCells, hasWon, setHasWon } = get();
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

    const remainingCombinations = winningCombinations.filter((combination) =>
      combination.some((index) => !selectedCells[index])
    );

    const isWinningCombination = remainingCombinations.some((combination) =>
      combination.every((index) => selectedCells[index])
    );

    if (isWinningCombination && !hasWon) {
      setHasWon(true);
      return true;
    } else if (!isWinningCombination && hasWon) {
      setHasWon(false);
    }

    return false;
  },

  setHasWon: (value) => set({ hasWon: value }),
}));
