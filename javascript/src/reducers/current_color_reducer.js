import { CHANGE_CURRENT_COLOR } from '../actions/index';

export default function (state = "#000000", action) {
    console.log(action);
    switch (action.type) {
        case CHANGE_CURRENT_COLOR:
            return action.payload;
        default:
            return state;
    }
}