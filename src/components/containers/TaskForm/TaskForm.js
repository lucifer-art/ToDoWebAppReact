import { useState } from 'react';
import classes from "./TaskForm.module.css";
import Card from "../../UI/Card/Card";

const TaskForm = props => {

    const [addTask, setAddTask] = useState('');
    const [addPriority, setaddPriority] = useState('');

    const addTaskHandler = event => {
        event.preventDefault();
        setAddTask(event.target.value);
    }
    const addPriorityHandler = event => {
        event.preventDefault();
        setaddPriority(event.target.value);
    }

    const onSubmitHandler = event => {
        event.preventDefault();
        const task = {
            id:Math.random() / 100,
            task: addTask,
            priority: addPriority
        }
        props.taskList(task);
        setAddTask('');
        setaddPriority('');
    }

    return (
        <Card>
            <form onSubmit={onSubmitHandler}>
                <div className={classes.formControl}>
                    <label htmlFor='task'>Task</label>
                    <input id='task' value={addTask} type="text" onChange={addTaskHandler} placeholder="Provide task" />
                </div>
                <div className={classes.formControl}>
                    <label htmlFor='taskPriority'>Task Priority</label>
                    <select id='taskPriority' onChange={addPriorityHandler} value={addPriority}>
                        <option value=''>Select Priority</option>
                        <option value='Low'>Low</option>
                        <option value='Moderate'>Moderate</option>
                        <option value='High'>High</option>
                    </select>
                </div>
                <div className={classes.formControl}>
                    <button type='submit'>Add Task</button>
                </div>
            </form>
        </Card>
    )
}

export default TaskForm;