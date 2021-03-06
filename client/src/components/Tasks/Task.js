import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { updateTask } from '../../actions/tasks';
import './styles.css';

const Task = ({ task }) => {
    const dispatch = useDispatch();
    const currentTask = task._id;
    const isComplete = task.isComplete;

    const [showMore, setShowMore] = useState(false);
    const [complete, setComplete] = useState({ isComplete: task.isComplete });

    const currentDate = new Date();
    const taskDueDate = new Date(task.dueBy);
    const currentDay = currentDate.getDay();
    const taskDueDay = taskDueDate.getDay();

    const handleUpdateTask = (e) => {
        e.preventDefault();
        dispatch(updateTask(currentTask, complete));
        setShowMore(false);
    }


    return (
        <div className={(isComplete && "complete-task-div") || (new Date(task.dueBy) < currentDate && "overdue-task-div") || "task-div"} >
            <div className="task-header" onClick={() => showMore ? setShowMore(false) : setShowMore(true)}>
                <h3>{task.name}</h3>
                {currentDate.getMonth() + currentDay === taskDueDate.getMonth() + taskDueDay ? <h4>Due today</h4> : null}
                <h3 className="task-priority">{task.priority}</h3>
            </div>
            
            {showMore &&
            <div className="task-info">
                <h3>{`Finish by: ${new Date(task.dueBy).toLocaleDateString("en-US")}`}</h3>
                <h5>{task.description}</h5>
                <form className="edit-task-form" onSubmit={handleUpdateTask}>
                    <input type="checkBox" onChange={(e) => setComplete({ ...complete, isComplete: !isComplete})} />
                    <button type="submit" >{task.isComplete === false ? "Mark complete" : "Mark incomplete"}</button>
                </form>
            </div>
            }
        </div>
    )
}

export default Task;