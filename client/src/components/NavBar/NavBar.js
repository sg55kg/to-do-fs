import { BsXLg, BsCardChecklist, BsPencilSquare } from 'react-icons/bs';
import { useState } from 'react';

import Lists from '../Lists/Lists';
import Form from '../Form/Form';
import './styles.css';

const NavBar = ({ selectList, setSelectList, showForm, setShowForm, setShowNav, showNav }) => {
    const [showCreateBtn, setShowCreateBtn] = useState(true);

    function closeNav() {
        setShowNav(false);
        setShowCreateBtn(true);
        setShowForm(false);
    }

    function openForm() { 
        setShowForm(true);
        setShowCreateBtn(false);
    }

    return (
        <div className="nav-bar" style={{ display: showNav ? 'flex' : 'none' }}>
            <button className="close-nav" onClick={closeNav}><BsXLg style={{ width: '1.5em', height: '1.5em' }} /></button>
            <h3><BsCardChecklist /> Current lists: </h3>
            <Lists selectList={selectList} setSelectList={setSelectList} setShowNav={setShowNav} />
            <div className="button-form-div">
                {showCreateBtn && <button className="add-new-list" onClick={openForm}><BsPencilSquare /> Add new list</button>}
                { showForm ? <Form setShowForm={setShowForm} setShowCreateBtn={setShowCreateBtn} /> : null}
            </div>
        </div>
    )
}

export default NavBar;