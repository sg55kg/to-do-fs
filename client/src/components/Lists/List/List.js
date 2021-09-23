import { useSelector } from 'react-redux';
import TaskForm from '../../TaskForm/TaskForm';

import './styles.css';

const List = ({ selectList, showTaskForm, setShowTaskForm }) => {
    const lists = useSelector((state) => state.lists);
    const list = useSelector((state) => selectList ? state.lists.find((l) => l._id === selectList) : null)

    const openTaskForm = () => {
        setShowTaskForm(true);
    }

    if(list)
    return (
        <div className="body-container">
            <h1 className="list-title">{list.title}</h1>
            <h3>Created on: {list.createdOn}</h3>
            <h2>Tasks: </h2>
            {list.tasks > 0 ? <h3>{list.tasks}</h3> : <h3>No tasks added yet</h3>}
            <button onClick={openTaskForm}>Add new task</button>
            {showTaskForm ? <TaskForm showTaskForm={showTaskForm} setShowTaskForm={setShowTaskForm} selectList={selectList} /> : null}
        </div>
    )
    else
    return (
        <div className="body-container">
            <h1>No list selected</h1>
        </div>
    )
    
}

export default List;