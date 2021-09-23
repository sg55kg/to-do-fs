import List from './List/List';
import './styles.css'

import { CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { deleteList } from '../../actions/lists';

const Lists = ({ selectList, setSelectList}) => {
    const lists = useSelector((state) => state.lists)
    const dispatch = useDispatch();

    console.log(lists);

    const handleDelete = (id) => {
        
        console.log(id);
        dispatch(deleteList(id));
  
    }


    return (
        !lists.length ? <CircularProgress /> : (
            <div className="lists-nav">
            {lists.map((list) => (
                <div key={lists._id} className="list-nav">
                    <button className="list-select-nav" onClick={() => setSelectList(list._id)}>{list.title}</button>
                    <button className="delete-list-nav" onClick={() => handleDelete(list)}>X</button>       
                </div>
            ))}
            </div>
            
        )
    )
}

export default Lists;