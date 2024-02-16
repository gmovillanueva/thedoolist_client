import { create } from 'zustand';

export const useModalStore = create((set) => ({
  openModal: false,
  toggleModal: () => set((state) => ({ openModal: !state.openModal })),
  closeModal: () => set(() => ({ openModal: false })),
}));
