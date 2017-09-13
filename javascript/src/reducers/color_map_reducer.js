import { CHANGE_COLOR_ON_SQUARE } from '../actions/index';

export default function (state = {}, action) {
    switch (action.type) {
        case CHANGE_COLOR_ON_SQUARE:
            return {...state}[action.payload.x + ',' + action.payload.y] = action.payload.color;

        default:
            let result = {};
            for (let i = 0; i < 64; i++) {
                for (let j = 0; j < 64; j++) {
                    result[i + ',' + j] = "#000000";
                }
            }
            return result;
    }
}