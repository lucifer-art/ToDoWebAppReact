import { Fragment } from 'react';
import TaskForm from './components/containers/TaskForm/TaskForm';
import Header from './components/UI/Header/Header';

function App() {
  return (
    <Fragment>
      <Header />
      <TaskForm />
    </Fragment>
  );
}

export default App;
