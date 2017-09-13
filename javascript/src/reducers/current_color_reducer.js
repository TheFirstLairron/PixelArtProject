import { CHANGE_CURRENT_COLOR } from '../actions/index';

export default function (state = "#000000", action) {
    switch (action.type) {
        case CHANGE_CURRENT_COLOR:
            return action.payload;
        default:
            return state;
    }
}