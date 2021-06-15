import classes from "./TaskForm.module.css";
import Card from "../../UI/Card/Card";

const TaskForm = props => {
    return (
        <Card>
            <form>
                <div className={classes.formControl}>
                    <label htmlFor='task'>Task</label>
                    <input id='task' type="text" placeholder="Provide task" />
                </div>
                <div className={classes.formControl}>
                    <label htmlFor='taskPriority'>Task Priority</label>
                    <select>
                        <option id='taskPriority' value=''>Select Priority</option>
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