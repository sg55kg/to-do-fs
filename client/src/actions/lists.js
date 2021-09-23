import * as api from '../api';

//Action creators
export const getLists = () => async (dispatch) => {
    try {
        const { data } = await api.fetchLists();

        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const createLists = (list) => async (dispatch) => {
    try {
        const { data } = await api.createLists(list);

        dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const updateList = (id, list) => async (dispatch) => {
    try {
        const { data } = await api.updateList(id, list)

        dispatch({ type: 'UPDATE', payload: data })
    } catch (error) {
        console.log(error);
    }
}

export const deleteList = (id) => async (dispatch) => {
    try {
        await api.deleteList(id);

        dispatch({ type: 'DELETE', payload: id })
    } catch (error) {
        console.log(error);
    }
}