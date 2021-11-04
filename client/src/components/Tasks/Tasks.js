import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getTasks } from '../../actions/tasks';

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
        const overDueTasks = matchingTasks.filter((task) => new Date(task.dueBy) < currentDay);
        const completeTasks = matchingTasks.filter((task) => task.isComplete === true)

        return (
            <>
            {currentTasks.map((task) => { return <Task task={task} />})}
            <h2 style={{ textAlign: 'center' }}>Overdue tasks: </h2>
            {overDueTasks.map((task) => { return <Task task={task} />})}
            <h2 style={{ textAlign: 'center' }}>Completed tasks: </h2>
            {completeTasks.map((task) => { return <Task task={task} />})}
            </>
        )
    }
    else
        return (
            <h3>No tasks added yet</h3>
        )
}

export default Tasks;