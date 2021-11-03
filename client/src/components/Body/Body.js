import './styles.css';
//import Form from '../Form/Form';
import List from '../Lists/List/List';
//import TaskForm from '../TaskForm/TaskForm';

import { useSelector } from 'react-redux';
//import { useEffect } from 'react';
import { useState } from 'react';

const Body = ({ selectList }) => {
    //const lists = useSelector((state) => state.lists)
    const list = useSelector((state) => selectList ? state.lists.find((p) => p._id === selectList) : null)

    const [showTaskForm, setShowTaskForm] = useState(false);

    return (
        <div className="body">
            <List list={list} selectList={selectList} showTaskForm={showTaskForm} setShowTaskForm={setShowTaskForm} />
        </div>
    )
}

export default Body;