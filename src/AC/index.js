import { DELETE_ITEM } from '../constants';

export function deleteItem(id) {
    return {
        type: DELETE_ITEM,
        payload: { id }
    }
}