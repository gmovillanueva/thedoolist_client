import { ModalAddTask } from '@components/Modal/ModalAddTask.jsx';

export function AddNewTask() {
  return (
    <fieldset className='w-full text-gray-800'>
      <div className='my-4 flex justify-center'>
        <ModalAddTask />
      </div>
    </fieldset>
  );
}
