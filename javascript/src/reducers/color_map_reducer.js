import { CHANGE_COLOR_ON_SQUARE } from '../actions/index';

export default function (state = {}, action) {

    switch (action.type) {
        case CHANGE_COLOR_ON_SQUARE:
            {
                let newState = { ...state };
                newState[action.payload.x + ',' + action.payload.y] = action.payload.color;
                return newState;
            }
        default:
            return state;
    }
}