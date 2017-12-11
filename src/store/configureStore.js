import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvarent from 'redux-immutable-state-invariant';

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        //dont need the line below but this helps keeps things immutable
        applyMiddleware(reduxImmutableStateInvarent())
    );
}