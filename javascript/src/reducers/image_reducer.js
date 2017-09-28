import { NEW_IMAGE_FOR_DOWNLOAD } from '../actions/index';

export default function (state = "", action) {

    switch (action.type) {
        case NEW_IMAGE_FOR_DOWNLOAD:
            return action.payload.data;
        default:
            return state;
    }
}