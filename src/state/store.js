import { legacy_createStore as createStore } from "redux";
import { combineReducers } from "redux";
import { reducer } from "./reducers/counterReducer";


const reducers = {
    counter: reducer
};

const rootReducer = combineReducers(reducers);


export const store = createStore(rootReducer, {});