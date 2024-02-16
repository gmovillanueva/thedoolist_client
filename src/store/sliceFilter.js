export const sliceFilter = (set) => ({
  value: 'all',

  setFilter: (value) => {
    set((state) => ({
      filter: {
        ...state.filter,
        value,
      },
    }));
  },
});
