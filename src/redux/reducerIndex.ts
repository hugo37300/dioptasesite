import { combineReducers } from 'redux';
import device from "./device/device.reducer"

import action from "../models/classes/action"

const appReducer = combineReducers({
    device,
});

const rootReducer = (state: any, action: action) => {
    return state;
};

export default rootReducer;
