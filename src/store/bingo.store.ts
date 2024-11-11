import { create } from 'zustand';

interface BingoState {
  phrases: string[];
  selectedCells: boolean[];
  toggleCell: (index: number) => void;
  resetGame: () => void;
  checkWin: () => boolean;
}

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
    'Could you share this slides afterwards?',
    'can somebody grant presenter rights?',
    'can you email that to everyone?',
    '',
    'sorry, I had problems logging in',
    'animal noises in the background',
    "sorry, I didn't find the conference id",
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

  toggleCell: (index) =>
    set((state) => {
      const updatedCells = [...state.selectedCells];
      updatedCells[index] = !updatedCells[index];
      return { selectedCells: updatedCells };
    }),

  resetGame: () => set({ selectedCells: Array(25).fill(false) }),

  checkWin: () => {
    const { selectedCells } = get();

    // Define all possible winning combinations
    const winningCombinations = [
      // Rows
      [0, 1, 2, 3, 4],
      [5, 6, 7, 8, 9],
      [10, 11, 12, 13, 14],
      [15, 16, 17, 18, 19],
      [20, 21, 22, 23, 24],

      // Columns
      [0, 5, 10, 15, 20],
      [1, 6, 11, 16, 21],
      [2, 7, 12, 17, 22],
      [3, 8, 13, 18, 23],
      [4, 9, 14, 19, 24],

      // Diagonals
      [0, 6, 12, 18, 24],
      [4, 8, 12, 16, 20],
    ];

    // Check if any winning combination is fully selected
    return winningCombinations.some((combination) =>
      combination.every((index) => selectedCells[index])
    );
  },
}));
