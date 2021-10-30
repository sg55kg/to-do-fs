import { useState } from 'react';
import { useDispatch } from 'react-redux';

import './styles.css';
import { createLists } from '../../actions/lists';

const Form = ({ setShowForm }) => {

    const [listData, setListData] = useState({
            title: '',
        })

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createLists(listData))

        setShowForm(false);
    }

    const cancelSubmit = (e) => {
        e.preventDefault();

        setShowForm(false);
    }

    return (
        <form className="form">
            <h5>Create new list</h5>
            <label>Enter list name</label>
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