import { DELETE_ITEM, ADD_ITEM, ADD_COMMENT } from '../constants';

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

export function addComment(id, comment) {
    return {
        type: ADD_COMMENT,
        payload: { id, comment }
    }
}

