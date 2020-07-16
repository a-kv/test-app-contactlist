import {contactsReducer} from './reducer';
import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

import {reducer as reducerForm} from 'redux-form';

const rootReducer = combineReducers({
    contactList: contactsReducer,
    form: reducerForm,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export type AppRootStateType = ReturnType<typeof rootReducer>

