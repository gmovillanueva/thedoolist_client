import { Controller, useForm } from 'react-hook-form';

import PropTypes from 'prop-types';
import { useEditTask } from '@utils/api/queryTask.js';

export function ButtonToggle({ todoItem }) {
  const { id, is_completed } = { ...todoItem };
  const { control } = useForm();

  const { mutate } = useEditTask(id);

  function updateSubmit(event, onChangeFunction) {
    onChangeFunction(event.target.checked);
    const data = {
      ...todoItem,
      is_completed: event.target.checked,
    };
    mutate(data, {
      onSuccess: () => {
        console.log('Task Patched Successfully With:');
        window.location.reload();
      },
    });
  }

  return (
    <>
      <form>
        <Controller
          defaultValue={is_completed}
          control={control}
          name='is_completed'
          render={({ field: { onChange, name, value } }) => (
            <>
              <input
                name={name}
                checked={value}
                onChange={(event) => updateSubmit(event, onChange)}
                type='checkbox'
                className='rounded-full border-violet-600 bg-gray-100 checked:text-violet-600 focus:ring-violet-600'
              />
            </>
          )}
        ></Controller>
      </form>
    </>
  );
}

ButtonToggle.propTypes = {
  todoItem: PropTypes.object.isRequired,
};
