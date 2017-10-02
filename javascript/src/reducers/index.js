import { combineReducers } from 'redux';
import current_color from './current_color_reducer';
import squares from './color_map_reducer';
import image from './image_reducer';

const rootReducer = combineReducers({
    squares,
    current_color,
    image,
});

export default rootReducer;
