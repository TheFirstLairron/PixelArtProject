import axios from 'axios';

export const CHANGE_COLOR_ON_SQUARE = "CHANGE_COLOR_ON_SQUARE";
export const CHANGE_CURRENT_COLOR = "CHANGE_CURRENT_COLOR";
export const NEW_IMAGE_FOR_DOWNLOAD = "NEW_IMAGE_FOR_DOWNLOAD";

export function setColorOnPosition(color, x, y) {
    return {
        type: CHANGE_COLOR_ON_SQUARE,
        payload: { color, x, y }
    };
}

export function setCurrentColor(color) {
    return {
        type: CHANGE_CURRENT_COLOR,
        payload: color
    }
}

export function setImageForDownload(object) {

    let image = Array(64).fill(Array(64).fill("#000000"));

    for (let i = 0; i < 64; i++) {
        for (let j = 0; j < 64; j++) {
            image[i][j] = object[i + ',' + j];
        }
    }

    let request = axios.post("/create-image", image);

    return {
        type: NEW_IMAGE_FOR_DOWNLOAD,
        payload: request
    }
}