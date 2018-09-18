import { DELETE_ITEM, ADD_ITEM } from '../constants';

export function deleteItem(id) {
    return {
        type: DELETE_ITEM,
        payload: { id }
    }
}

export function addItem(item) {
    return {
        type: ADD_ITEM,
        payload: { item }
    }
}