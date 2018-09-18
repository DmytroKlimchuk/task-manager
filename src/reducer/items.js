import { items as defaultItems } from '../data';
import { DELETE_ITEM, ADD_ITEM } from '../constants';

export default (itemState = defaultItems, action) => {
    const { type, payload } = action;

    switch (type){
        case DELETE_ITEM: return itemState.filter(item => item.id !== payload.id);

        case ADD_ITEM: {
            let added = itemState.slice();
            added.push(payload.item);
            console.log(added);
            return added;
        }
    }

    return itemState;
}