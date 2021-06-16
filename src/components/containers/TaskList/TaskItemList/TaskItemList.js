import { useState } from 'react';
import classes from './TaskItemList.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Modal from '../../../UI/Modal/Modal';
import Backdrop from '../../../UI/Backdrop/Backdrop';

const TaskItemList = props => {

    const [done, setdone] = useState(false);
    const [modalOpen, setmodalOpen] = useState(false);

    let priorityClass = classes.priority;
    priorityClass = priorityClass.split();

    if (props.priority === 'Low') {
        priorityClass.push(classes.low);
    } else if (props.priority === 'High') {
        priorityClass.push(classes.high);
    } else if (props.priority === 'Moderate') {
        priorityClass.push(classes.moderate);
    } else {
        priorityClass = ''
    }
    const removeHandler = () => {
        props.onRemoveHandler(props.id);
        setmodalOpen(false);
    }

    const taskDoneHandler = () => {
        setdone(done => done = !done)
    }

    const modalOpenHandler = () => {
        setmodalOpen(true);
    }
    const cancelHandler = () => {
        setmodalOpen(false);
    }

    return (
        <div>
            {modalOpen && <Backdrop />}
            {modalOpen && <Modal>
                <div>
                    <p>Do you want to remove task?</p>
                    <div className={classes.modalButton}>
                        <button type='button' className={classes.remove} onClick={removeHandler}>Remove</button>
                        <button type='button' className={classes.cancel} onClick={cancelHandler}>Cancel</button>
                    </div>
                </div>
            </Modal>}
            <li>
                <span className={done ? classes.done : ''}>{props.task}</span><div className={priorityClass.join(' ')}></div>
                <div className={classes.iconClass}><FontAwesomeIcon icon={faTimes} onClick={modalOpenHandler} /></div>
                <div className={classes.donetaskButton}><button type='button' onClick={taskDoneHandler}>{!done ? 'Task Done' : 'Task Undone'}</button></div>
            </li>
        </div>
       
    )
}
export default TaskItemList;