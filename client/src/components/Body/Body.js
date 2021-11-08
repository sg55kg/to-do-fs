import './styles.css';
import List from '../Lists/List/List';
import NavBar from '../NavBar/NavBar';

import { useSelector } from 'react-redux';
import { useState } from 'react';

const Body = ({ selectList, setSelectList, showForm, setShowForm, setShowNav, showNav }) => {

    const list = useSelector((state) => selectList ? state.lists.find((p) => p._id === selectList) : null)

    const [showTaskForm, setShowTaskForm] = useState(false);

    return (
        <div className="body">
            <NavBar
                setSelectList={setSelectList} 
                selectList={selectList} 
                showForm={showForm} 
                setShowForm={setShowForm} 
                setShowNav={setShowNav} 
                showNav={showNav}
                /> 
            <List list={list} selectList={selectList} showTaskForm={showTaskForm} setShowTaskForm={setShowTaskForm} />
        </div>
    )
}

export default Body;