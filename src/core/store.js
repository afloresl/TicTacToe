import
{
    createStore,
    combineReducers,
    applyMiddleware,
    compose
} from "redux";

import thunk from "redux-thunk";
import {userReducer} from "../modules/tablero/state/tableroReducer";


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    tableroState: userReducer,
});

export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware( thunk ))
);
