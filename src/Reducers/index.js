import { combineReducers } from 'redux';

let mockReducer = function (state = 0, action) {
    return state;
}

export default combineReducers({
    mockReducer
});