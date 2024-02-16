import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { v4 as uuid } from 'uuid';

const initState = {
  todoList: [],
};

const actions = (set) => {
  const handleCompleteTodo = (id) => {
    set(
      (state) => ({
        todoList: state.todoList.map((todo) =>
          todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
        ),
      }),
      false,
      'complete_todo'
    );
  };

  const handleUpdateTodo = (id, newLabel) => {
    set(
      (state) => ({
        todoList: state.todoList.map((todo) =>
          todo.id === id ? { ...todo, label: newLabel } : todo
        ),
      }),
      false,
      'update_todo'
    );
  };

  const handleDeleteTodo = (id) => {
    set(
      (state) => ({
        todoList: state.todoList.filter((todo) => id !== todo.id),
      }),
      false,
      'delete_todo'
    );
  };

  const handleNewTodo = (label) => {
    set(
      (state) => {
        const newTodo = {
          id: uuid(),
          label: label,
          isCompleted: false,
        };

        state.todoList = [...state.todoList, newTodo];
      },
      false,
      'new_todo'
    );
  };

  const handleCompleteAllTodos = () => {
    set(
      (state) => ({
        todoList: state.todoList.map((todo) => ({
          ...todo,
          isCompleted: true,
        })),
      }),
      true,
      'complete_all_todos'
    );
  };

  const handleCleanTodoList = () => {
    set(
      (state) => {
        state.todoList = [];
      },
      true,
      'clean_todo_list'
    );
  };

  const handleResetTodoList = () => {
    set(
      (state) => {
        state.todoList = initState.todoList;
      },
      true,
      'reset_todo_list'
    );
  };

  return {
    handleCompleteTodo,
    handleUpdateTodo,
    handleDeleteTodo,
    handleNewTodo,
    handleCompleteAllTodos,
    handleCleanTodoList,
    handleResetTodoList,
  };
};

export const useCoreStore = create()(
  devtools(
    immer(
      persist(
        (set) => ({
          ...initState,
          ...actions(set),
        }),
        {
          name: 'TODO.STORE',
          storage: createJSONStorage(() => sessionStorage),
        }
      )
    ),
    {
      name: 'TODO.STORE',
    }
  )
);
