import './styles.css'

import { CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { deleteList } from '../../actions/lists';

const Lists = ({ selectList, setSelectList, setShowNav }) => {
    const lists = useSelector((state) => state.lists)
    const dispatch = useDispatch();

    const handleSelect = (id) => {
        setSelectList(id);
        setShowNav(false);
    }

    return (
        !lists.length ? <CircularProgress /> : (
            <div className="lists-nav">
            {lists.map((list) => (
                <div key={lists._id} className="list-nav">
                    <button className="list-select-nav" onClick={() => handleSelect(list._id)}>{list.title}</button>
                    <button className="delete-list-nav" onClick={() => dispatch(deleteList(list._id))}>X</button>       
                </div>
            ))}
            </div>         
        )
    )
}

export default Lists;