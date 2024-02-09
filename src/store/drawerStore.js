import { create } from 'zustand';

export const useDrawerStore = create((set) => ({
  openDrawer: false,
  toggleDrawer: () => set((state) => ({ openDrawer: !state.openDrawer })),
  closeDrawer: () => set(() => ({ openDrawer: false })),
}));
