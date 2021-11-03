import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getTasks } from '../../actions/tasks';

import Task from './Task';

const Tasks = ({ selectList }) => {
    const tasks = useSelector((state) => state.tasks);
    const list = useSelector((state) => selectList ? state.lists.find((l) => l._id === selectList) : null);
    const dispatch = useDispatch();

    const filteredTasks = tasks.filter((task) => task.listId === list._id);

    useEffect(() => {
        dispatch(getTasks());
    }, [dispatch])

    console.log(tasks);

    

    if(filteredTasks.length > 0) {
        filteredTasks.sort((a, b) => {return (a.priority - b.priority)});
        return (
            <>
            {filteredTasks.map((task) => { return <Task task={task} />})}
            </>
        )
    }
    else
        return (
            <h3>No tasks added yet</h3>
        )
}

export default Tasks;