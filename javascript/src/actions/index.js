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

    let image = Array(64);
    for(let k = 0; k < 64; k++)
    {
        image[k] = Array(64).fill("#FFFFFF");
    }

    for (let i = 0; i < 64; i++) {
        for (let j = 0; j < 64; j++) {
            let pos = i + ',' + j;
            let value = object[pos] !== undefined ? object[pos] : "#FFFFFF";
            image[i][j] = value;
        }
    }

    let request = axios.post("/create-image", { image });

    return {
        type: NEW_IMAGE_FOR_DOWNLOAD,
        payload: request
    }
}