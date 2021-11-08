import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getTasks } from '../../actions/tasks';
import { BsJournalCheck, BsExclamationTriangle } from 'react-icons/bs';

import Task from './Task';

const Tasks = ({ selectList }) => {
    const tasks = useSelector((state) => state.tasks);
    const list = useSelector((state) => selectList ? state.lists.find((l) => l._id === selectList) : null);
    const dispatch = useDispatch();

    const matchingTasks = tasks.filter((task) => task.listId === list._id);
    const currentDay = new Date();

    useEffect(() => {
        dispatch(getTasks());
    }, [dispatch])

    console.log(tasks);

    

    if(matchingTasks.length > 0) {
        matchingTasks.sort((a, b) => {return (a.priority - b.priority)}); 
        const currentTasks = matchingTasks.filter((task) => new Date(task.dueBy) >= currentDay && !task.isComplete);
        const overDueTasks = matchingTasks.filter((task) => new Date(task.dueBy) < currentDay && !task.isComplete);
        const completeTasks = matchingTasks.filter((task) => task.isComplete === true)

        return (
            <>
            {currentTasks.length > 0 ? currentTasks.map((task) => { return <Task task={task} />}) : <h4>No current tasks</h4>}
            <h2 style={{ textAlign: 'center' }}><BsExclamationTriangle /> Overdue tasks: </h2>
            {overDueTasks.length > 0 ? overDueTasks.map((task) => { return <Task task={task} />}) : <h4>No overdue tasks</h4>}
            <h2 style={{ textAlign: 'center' }}><BsJournalCheck /> Completed tasks: </h2>
            {completeTasks.length > 0 ? completeTasks.map((task) => { return <Task task={task} />}) : <h4>No tasks completed</h4>}
            </>
        )
    }
    else
        return (
            <h3>No tasks added yet</h3>
        )
}

export default Tasks;