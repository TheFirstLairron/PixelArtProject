import axios from 'axios';

export const CHANGE_COLOR_ON_SQUARE = "CHANGE_COLOR_ON_SQUARE";
export const CHANGE_CURRENT_COLOR = "CHANGE_CURRENT_COLOR";

export function setColorOnPosition(color, x, y){
    return {
        type: CHANGE_COLOR_ON_SQUARE,
        payload: {color, x, y}
    };
}

export function setCurrentColor(color){
    return {
        type: CHANGE_CURRENT_COLOR,
        payload: color
    }
}