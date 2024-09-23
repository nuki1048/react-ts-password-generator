import { create } from 'zustand';

export interface PasswordHistoryItem {
  password: string;
  generatedDate: string;
}

interface PasswordsStore {
  passwords: PasswordHistoryItem[];
  addNewPassword: (password: PasswordHistoryItem) => void;
  clearHistory: () => void;
}

export const usePasswordsStore = create<PasswordsStore>((set) => ({
  passwords: [],
  addNewPassword: (password) =>
    set((state) => ({ passwords: [...state.passwords, password] })),
  clearHistory: () => set({ passwords: [] }),
}));
