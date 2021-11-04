import { useState } from 'react';

import './styles.css';

const Task = ({ task }) => {
    const [showMore, setShowMore] = useState(false);
    // const [urgent, setUrgent] = useState(!!task);

    const currentDate = new Date();
    const taskDueDate = new Date(task.dueBy);
    const currentDay = currentDate.getDay();
    const taskDueDay = taskDueDate.getDay();

    return (
        <div className="task-div" onClick={() => showMore ? setShowMore(false) : setShowMore(true)}>
            <div className="task-header">
                <h3>{task.name}</h3>
                {currentDay === taskDueDay ? <h4>Due today</h4> : null}
                <h3 className="task-priority">{task.priority}</h3>
            </div>
            {showMore &&
            <div className="task-info">
                <h3>{`Finish by: ${new Date(task.dueBy).toLocaleDateString("en-US")}`}</h3>
                <h5>{task.description}</h5>
            </div>
            }
        </div>
    )
}

export default Task;