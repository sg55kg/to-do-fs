import { useSelector, useDispatch } from 'react-redux';
import { BsListCheck, BsFillCalendarFill } from 'react-icons/bs';

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

    if(list) 
    return (
        <div className="body-container">
            <div className="list-header">
                <h1 className="list-title">{list.title}</h1>
                <h3><BsFillCalendarFill /> Created on: {new Date(list.createdOn).toLocaleDateString("en-US")}</h3>
            </div>
            <h2 style={{ textAlign: 'center', alignSelf: 'center' }}><BsListCheck style={{ }} /> Tasks:</h2>
            <Tasks selectList={selectList} />
            <div className="task-form-btns">
                <button className="add-new-task-btn" onClick={openTaskForm}>Add new task</button>
                <button className="delete-list-btn" onClick={() => dispatch(deleteList(list._id))}>Delete list</button>
            </div>
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