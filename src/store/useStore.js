import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { sliceTask } from '@store/sliceTask.js';
import { sliceFilter } from '@store/sliceFilter.js';

function mergeSlices(savedState, currentState) {
  return {
    filter: {
      ...currentState.filter,
    },
    tasks: {
      ...currentState.tasks,
      ...savedState.tasks,
    },
  };
}

export const useStore = create()(
  devtools(
    persist(
      (set, get) => ({
        filter: sliceFilter(set, get),
        tasks: sliceTask(set, get),
      }),
      {
        name: 'todos',
        partialize: (state) => ({
          tasks: state.tasks,
        }),
        merge: (state, partialState) => mergeSlices(state, partialState),
      }
    )
  )
);
