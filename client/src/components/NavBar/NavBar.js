import Lists from '../Lists/Lists';
import Form from '../Form/Form';
import './styles.css';

const NavBar = ({ selectList, setSelectList, showForm, setShowForm, setShowNav, showNav }) => {

    function closeNav() {
        setShowNav(false);
    }

    function openForm() { 
        setShowForm(true);
    }

    return (
        <div className="nav-bar" style={{ display: setShowNav ? 'flex' : 'none' }}>
            <button className="close-nav" onClick={closeNav}>X</button>
            <h3>Current lists: </h3>
            <Lists selectList={selectList} setSelectList={setSelectList} setShowNav={setShowNav} />
            <div className="button-form-div">
                <button className="add-new-list" onClick={openForm}>Add new list</button>
                { showForm ? <Form showForm={showForm} setShowForm={setShowForm} /> : null}
            </div>
        </div>
    )
}

export default NavBar;