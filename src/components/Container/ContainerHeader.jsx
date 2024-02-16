import { useStore } from '@store/useStore.js';
import { FilterButton } from '@components/Buttons/FilterButton.jsx';
import { taskCounter } from '@utils/taskCounter.js';
export function ContainerHeader() {
  const {
    tasks: { values: userTasks },
  } = useStore();

  /*  function taskCounter() {
    let taskCount = userTasks.length;
    if (taskCount === 0 || taskCount > 1) {
      return `${taskCount} items left`;
    }
    return `${taskCount} item left`;
  }*/

  const filterOptions = ['All', 'Active', 'Completed'];

  return (
    <>
      {/*Top Container*/}
      <div className='flex h-16 w-full justify-between rounded-t-md bg-violet-600 px-6 align-middle text-sm leading-tight'>
        {/* Task Counter*/}
        <div>
          <p className='my-auto text-gray-50'>
            {taskCounter(userTasks.length)}
          </p>
        </div>
        {/* Button Group */}
        <div>
          {filterOptions.map((option, key) => {
            return (
              <FilterButton
                key={key}
                label={option}
              />
            );
          })}
        </div>

        {/*        <ButtonFilter
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
        />*/}
      </div>
    </>
  );
}
