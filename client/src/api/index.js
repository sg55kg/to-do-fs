import axios from 'axios';

const url = 'http://localhost:5000/lists';
const taskUrl = 'http://localhost:5000/tasks';

export const fetchLists = () => axios.get(url);
export const createLists = (newList) => axios.post(url, newList);
export const updateList = (id, updatedList) => axios.patch(`${url}/${id}`, updatedList);
export const deleteList = (id) => axios.delete(`${url}/${id}`);

export const fetchTasks = () => axios.get(taskUrl); //
export const createTask = (newTask, list) => axios.post(taskUrl, newTask);
export const updateTask = (id, updatedTask) => axios.patch(`${taskUrl}/${id}`, updatedTask);
export const deleteTask = (id) => axios.delete(`${taskUrl}/${id}`);