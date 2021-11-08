import { useState } from 'react';
import { useDispatch } from 'react-redux';

import './styles.css';
import { createLists } from '../../actions/lists';

const Form = ({ setShowForm, setShowCreateBtn }) => {

    const [listData, setListData] = useState({ title: '' })

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createLists(listData))

        setShowForm(false);
        setShowCreateBtn(true);
    }

    const cancelSubmit = (e) => {
        e.preventDefault();

        setShowForm(false);
        setShowCreateBtn(true);
    }

    return (
        <form className="form">
            <h4>Create new list</h4>
            <h5>Enter list name</h5>
            <input 
                type="text" 
                value={listData.title}
                onChange={(e) => setListData({ ...listData, title: e.target.value })}>
            </input>
            <button className="submit-new-list" onClick={handleSubmit}>Submit new list</button>
            <button className="cancel-submit-list" onClick={cancelSubmit}>Cancel</button>
        </form>   
    )
}

export default Form;