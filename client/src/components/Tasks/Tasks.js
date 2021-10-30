import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getTasks } from '../../actions/tasks';

import Task from './Task';

const Tasks = () => {
    const tasks = useSelector((state) => state.tasks);
    const dispatch = useDispatch();

    

    useEffect(() => {
        dispatch(getTasks());
    }, [dispatch])

    console.log(tasks);

    if(tasks)
        return (
            <>
            {tasks.map((task) => {
                return (
                    <Task key={task._id} task={task} />
                )
            })}
            </>
        )
    else
        return (
            <h3>No tasks added yet</h3>
        )
}

export default Tasks;