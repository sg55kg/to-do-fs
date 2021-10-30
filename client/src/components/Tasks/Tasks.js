import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getTasks } from '../../actions/tasks';

import Task from './Task';

const Tasks = ({ selectList }) => {
    const tasks = useSelector((state) => state.tasks);
    const list = useSelector((state) => selectList ? state.lists.find((l) => l._id === selectList) : null);
    const dispatch = useDispatch();

    

    useEffect(() => {
        dispatch(getTasks());
    }, [dispatch])

    console.log(tasks);

    const filteredTasks = tasks.filter((task) => task.listId === list._id);

    if(filteredTasks.length > 0) {
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