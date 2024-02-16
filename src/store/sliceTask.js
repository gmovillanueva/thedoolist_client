import { seedStore } from '@utils/seedStore.js';
import { v4 as uuid4 } from 'uuid';

export const sliceTask = (set, get) => ({
  values: seedStore,

  handleNewTask: (description) => {
    set((state) => ({
      tasks: {
        ...state.tasks,
        values: [
          ...state.tasks.values,
          {
            id: uuid4(),
            description: description,
            is_completed: false,
          },
        ],
      },
    }));
  },

  handleRemoveTask: (id) => {
    set((state) => ({
      tasks: {
        ...state.tasks,
        values: state.tasks.values.filter((task) => task.id !== id),
      },
    }));
  },

  handleCompletedTask(id) {
    set((state) => ({
      tasks: {
        ...state.tasks,
        values: state.tasks.values.map((task) => {
          if (task.id === id) {
            return {
              ...task,
              is_completed: !task.is_completed,
            };
          }
          return task;
        }),
      },
    }));
  },

  handleDeleteCompletedTask: () => {
    set((state) => ({
      tasks: {
        ...state.tasks,
        values: state.tasks.values.filter((task) => !task.is_completed),
      },
    }));
  },

  handleMoveTask(src, dest) {
    const tasks = get().tasks.values;
    const [removed] = tasks.splice(src, 1);
    tasks.splice(dest, 0, removed);
    set((state) => ({
      tasks: {
        ...state.tasks,
        values: tasks,
      },
    }));
  },
});
