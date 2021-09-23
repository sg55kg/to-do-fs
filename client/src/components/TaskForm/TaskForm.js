import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { updateList } from '../../actions/lists';

const TaskForm = ({ showTaskForm, setShowTaskForm, selectList }) => {
    

    const [taskData, setTaskData] = useState()

    const dispatch = useDispatch();


    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(updateList(selectList, taskData));

        setShowTaskForm(false);
    }

    const cancelSubmit = (e) => {
        e.preventDefault();

        setShowTaskForm(false);
    }

    return (
        <form className="task-form">
            <h3>Add a task to this list</h3> {/*get this list name and replace 'list' with {list.title}*/ }
            <label>Task name:</label>
            <input type="text" onChange={(e) => setTaskData()}></input>
            <label>Set task priority:</label>
            <input type="number" onChange={(e) => setTaskData()}></input>
            <label>Description:</label>
            <input type="text" onChange={(e) => setTaskData()}></input>
            <label>When does this need to be finished?</label>
            <input type="date" onChange={(e) => setTaskData()}></input>
            <button className="submit-new-task" onClick={handleSubmit}>Add Task</button>
            <button className="cancel-submit-task" onClick={cancelSubmit}>Cancel</button>
        </form>
    )
}

export default TaskForm;