import { items as defaultItems } from '../data';
import { DELETE_ITEM, ADD_ITEM, ADD_COMMENT } from '../constants';

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

        case ADD_COMMENT: {
            let arr = itemState.slice();

            arr.forEach(item => {
                if ( item.id == payload.id ) item.comments.push(payload.comment);
            });

            return arr;
        }


    }

    return itemState;
}