import { Fragment,useState } from 'react';
import TaskForm from './components/containers/TaskForm/TaskForm';
import Header from './components/UI/Header/Header';

function App() {

  const [taskList, settaskList] = useState([]);

  const taskListHandler = taskdata => {
    settaskList(task =>{
      return [...task, taskdata]
    });
    console.log(taskList);
  }

  return (
    <Fragment>
      <Header />
      <TaskForm taskList={taskListHandler} />
    </Fragment>
  );
}

export default App;
