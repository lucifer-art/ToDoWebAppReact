import { Fragment,useState } from 'react';
import PriorityDisplay from './components/containers/PriorityDisplay/PriorityDisplay';
import TaskForm from './components/containers/TaskForm/TaskForm';
import TaskList from './components/containers/TaskList/TaskList';
import Header from './components/UI/Header/Header';

function App() {

  const [taskList, settaskList] = useState([]);

  const taskListHandler = taskdata => {
    settaskList(task =>{
      return [...task, taskdata]
    });
  }

  const removeTaskHandler = id => {
    const taskData = taskList.filter(task => {
      return task.id !== id
    })
    settaskList(taskData);
  }

  return (
    <Fragment>
      <Header />
      <TaskForm taskList={taskListHandler} />
      {taskList.length > 0 && <PriorityDisplay />}
      {taskList.length > 0 && <TaskList taskData={taskList} onRemoveHandler={removeTaskHandler} />}
    </Fragment>
  );
}

export default App;
