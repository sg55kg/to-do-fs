import { useSelector, useDispatch } from 'react-redux';

import TaskForm from '../../TaskForm/TaskForm';
import Tasks from '../../Tasks/Tasks';
import { deleteList } from '../../../actions/lists';

import './styles.css';

const List = ({ selectList, showTaskForm, setShowTaskForm }) => {
    
    const list = useSelector((state) => selectList ? state.lists.find((l) => l._id === selectList) : null);
    
    const dispatch = useDispatch();

    const openTaskForm = () => {
        setShowTaskForm(true);
    }

    if(list) //does not display tasks, because it needs to make a call to fetch tasks
    return (
        <div className="body-container">
            <h1 className="list-title">{list.title}</h1>
            <h3>Created on: {list.createdOn}</h3>
            <h2>Tasks: </h2>
            <Tasks selectList={selectList} />
            <button onClick={openTaskForm}>Add new task</button>
            <button onClick={() => dispatch(deleteList(list._id))}>Delete list</button>
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