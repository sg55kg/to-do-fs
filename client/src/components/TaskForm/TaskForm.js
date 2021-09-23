import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { updateList } from '../../actions/lists';

const TaskForm = ({ showTaskForm, setShowTaskForm, selectList }) => {
    
    const dispatch = useDispatch();
    // const lists = useSelector((state) => state.lists);
    // const tasks = useSelector((state) => state.lists.tasks);

    const [task, setTask] = useState({ tasks: [] });

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(updateList(selectList, task));

        setShowTaskForm(false);
    }

    const cancelSubmit = (e) => {
        e.preventDefault();

        setShowTaskForm(false);
    }

    // const addNewTask = (i) => {

    //     let newTask = [...task];
    //     newTask[index] = e.target.value;
    //     setTask([newTask]);
    // }   

    return (
        <form className="task-form">
            <h3>Add a task to this list</h3> {/*get this list name and replace 'list' with {list.title}*/ }

            <label>Task name:</label>     
            <input type="text" onChange={(e) => setTask({
                ...task, 
                [name]: [...task[name], e.target.value]})}></input>

            <label>Set task priority:</label>
            <input type="number" onChange={(e) => setTask({
                ...task, 
                [priority]: [...task[priority], e.target.value]})}></input>

            <label>Description:</label>
            <input type="text" onChange={(e) => setTask({
                ...task, 
                [description]: [...task[description], e.target.value]})}></input>

            <label>When does this need to be finished?</label>
            <input type="date" onChange={(e) => setTask({
                ...task, 
                [dueBy]: [...task[dueBy], e.target.value]})}></input>

            <button className="submit-new-task" onClick={handleSubmit}>Add Task</button>
            <button className="cancel-submit-task" onClick={cancelSubmit}>Cancel</button>
        </form>
    )
}

export default TaskForm;