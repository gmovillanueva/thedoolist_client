import { useFetchTodos } from '@utils/api/queryTodos.js';
import { AddNewTask } from '@components/TaskField/AddNewTask.jsx';
import { InformationTabs } from '@components/Tabs/InformationTabs.jsx';
import Header from '@components/Header.jsx';
import { Container } from '@components/Container/Container.jsx';

function App() {
  /*  const { data, isFetching } = useFetchTodos();*/

  return (
    <>
      <div
        data-testid='main-body-test'
        className='h-screen bg-gray-100'
      >
        <div className='container mx-auto flex flex-col items-center px-4 py-16 text-center md:px-10 md:py-32 lg:px-32 xl:max-w-3xl'>
          <Header />
          <AddNewTask />
          <Container />

          {/*<Container />*/}
          {/*{isFetching ? null : (
            <InformationTabs
              todoList={data}
              itemCount={(data && data.length) || 0}
            />
          )}*/}
        </div>
      </div>
    </>
  );
}

export default App;
