import PropTypes from 'prop-types';
import { useState } from 'react';
import { filter } from 'ramda';

import { ButtonFilter } from '@components/Buttons/ButtonFilter.jsx';
import { TaskCard } from '@components/Cards/TaskCard.jsx';
import { ContainerFooter } from '@components/Container/ContainerFooter.jsx';
import { ContainerHeader } from '@components/Container/ContainerHeader.jsx';
import { ContainerBody } from '@components/Container/ContainerBody.jsx';

export function Container({ todoList, itemCount }) {
  const [todoData, setTodoData] = useState(todoList || []);

  function filterReset() {
    setTodoData(todoList);
  }

  function filterComplete() {
    function ramdaFilter(todo) {
      if (todo.is_completed) {
        return todo;
      }
    }

    const data = filter(ramdaFilter, todoList);
    setTodoData(data);
  }

  function filterActive() {
    function ramdaFilter(todo) {
      if (!todo.is_completed) {
        return todo;
      }
    }

    const data = filter(ramdaFilter, todoList);
    setTodoData(data);
  }

  return (
    <>
      {/*Top Container*/}
      {/*      <div className='flex h-16 w-full justify-between rounded-t-md bg-violet-600 px-6 align-middle text-sm leading-tight'>
        <ButtonFilter
          funcFilter={filterReset}
          label='All'
        />
        <ButtonFilter
          funcFilter={filterActive}
          label='Active'
        />
        <ButtonFilter
          funcFilter={filterComplete}
          label='Completed'
        />
      </div>*/}
      <ContainerHeader />
      <ContainerBody />
      <ContainerFooter />
    </>
  );
}

Container.propTypes = {
  itemCount: PropTypes.number,
  todoList: PropTypes.array,
};
