import Lists from '../Lists/Lists';
import Form from '../Form/Form';
import './styles.css';

import { useState } from 'react';

const NavBar = ({ selectList, setSelectList, showForm, setShowForm }) => {

    function closeNav() {
        const nav = document.querySelector('.nav-bar');
        const container = document.querySelector('.container');
        
        nav.style.display = 'none';
        container.style.marginLeft = '0em';
    }

    function openForm() { 
        setShowForm(true);
    }

    return (
        <div className="nav-bar">
            <button className="close-nav" onClick={closeNav}>X</button>
            <h3>Current lists: </h3>
            <Lists selectList={selectList} setSelectList={setSelectList} />
            <button className="add-new-list" onClick={openForm}>Add new list</button>
            { showForm ? <Form showForm={showForm} setShowForm={setShowForm} /> : null}
        </div>
    )
}

export default NavBar;