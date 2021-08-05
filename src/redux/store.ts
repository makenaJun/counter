import {combineReducers, createStore} from 'redux';
import {counterReducer} from './counter-reducer';
import {loadState, saveState} from '../utils/localstorage-utils';


const rootReducer = combineReducers({
    counter: counterReducer
});


const persistedState = loadState();


export const store = createStore(rootReducer, persistedState);

export type AppStateType = ReturnType<typeof rootReducer>;

store.subscribe(() => {
    saveState({counter: store.getState().counter})
})