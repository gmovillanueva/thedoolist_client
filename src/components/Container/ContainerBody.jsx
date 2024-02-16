import { TaskCard } from '@components/Cards/TaskCard.jsx';
import { useStore } from '@store/useStore.js';
import { EmptyCard } from '@components/Cards/EmptyCard.jsx';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

export function ContainerBody() {
  const {
    tasks: { values: userTasks },
  } = useStore();

  /*  function onTaskDrag(result) {
    if (!result.destination) return;

    const srcIndex = result.source.index;
    const destIndex = result.destination.index;

    const srcTask =
  }*/

  return (
    <>
      {/*<DragDropContext onDragEnd={onTaskDrag}>
        <Droppable>*/}
      {userTasks.length ? (
        userTasks?.map((tasks) => {
          return (
            <TaskCard
              key={tasks.id}
              todoItem={tasks}
            />
          );
        })
      ) : (
        <>
          <EmptyCard />
        </>
      )}
      {/*        </Droppable>
      </DragDropContext>*/}
    </>
  );
}
