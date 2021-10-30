import * as api from '../api';

export const getTasks = () => async (dispatch) => {
    try {
        const { data } = await api.fetchTasks();
        dispatch({ type: 'FETCH', payload: data });
    } catch (error) {
        console.log(error);
    } //needs to check for listId property, and only return tasks associated with that list
}

export const createTask = (task) => async (dispatch) => {
    try {
        const { data } = await api.createTask(task); //may not need to insert the list as an argument, since front end can prob fill that value
        dispatch({ type: 'CREATE', payload: data })
    } catch (error) {
        console.log(error);
    }
}