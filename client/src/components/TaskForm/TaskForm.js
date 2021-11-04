import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { createTask } from '../../actions/tasks';


const TaskForm = ({ showTaskForm, setShowTaskForm, selectList }) => {
    
    const dispatch = useDispatch();

    const [tasks, setTasks] = useState({ name: '', priority: 0, description: '', isComplete: false, dueBy: '', listId: selectList });


    const cancelSubmit = (e) => {
        e.preventDefault();
        setShowTaskForm(false);
    }

    const addNewTask = (e) => {
        e.preventDefault();
       
        try {
            dispatch(createTask(tasks));
        } catch (error) {
            console.log(error);
        }
        
        setShowTaskForm(false);
    }   

    return (
        <form className="task-form">
            <h3>Add a task to this list</h3> {/*get this list name and replace 'list' with {list.title}*/ }

            <label>Task name:</label>     
            <input type="text"
            value={tasks.name}
            onChange={(e) => setTasks({...tasks, name: e.target.value})}></input>

            <label>Set task priority:</label>
            <input type="number"
            value={tasks.priority}
            onChange={(e) => setTasks({...tasks, priority: e.target.value})}></input>

            <label>Description:</label>
            <input type="text"
            value={tasks.description} 
            onChange={(e) => setTasks({...tasks, description: e.target.value})}></input>

            <label>When does this need to be finished?</label>
            <input type="date"
            value={tasks.dueBy} 
            onChange={(e) => setTasks({...tasks, dueBy: e.target.value})}></input>

            <button className="submit-new-task" onClick={addNewTask}>Add Task</button>
            <button className="cancel-submit-task" onClick={cancelSubmit}>Cancel</button>
        </form>
    )
}

export default TaskForm;