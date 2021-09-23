import axios from 'axios';

const url = 'http://localhost:5000/lists';

export const fetchLists = () => axios.get(url);
export const createLists = (newList) => axios.post(url, newList);
export const updateList = (id, updatedList) => axios.patch(`${url}/${id}`, updatedList);
export const deleteList = (id) => axios.delete(`${url}/${id}`);