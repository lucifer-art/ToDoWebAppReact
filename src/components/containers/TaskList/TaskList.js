import TaskItemList from './TaskItemList/TaskItemList';
import classes from './TaskList.module.css';

const TaskList = props => {
    
    return (
        <ul className={classes.list}>
            {props.taskData.map(task => {
                return (
                    <TaskItemList key={task.id} id={task.id} task={task.task} priority={task.priority} onRemoveHandler={props.onRemoveHandler} />
                )
            })}
        </ul>
    )
}

export default TaskList;