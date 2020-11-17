import { createStore ,combineReducers} from 'redux';
import {Dishes} from './dishes';
import { Leaders } from "./leaders";
import { Promotions } from "./promotions";
import { Comments } from "./comments";

export const ConfigureStore = () => {
    const store = createStore(
        // Reducer, // reducer
        // initialState, // our initialState
        combineReducers({
            dishes:Dishes,
            comments:Comments,
            promotions:Promotions,
            leaders:Leaders
        })
    );
    return store;
}
