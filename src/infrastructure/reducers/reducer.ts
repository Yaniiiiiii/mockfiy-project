import { IGif } from '../models/data';
import { Action } from './action.creator';
import { actionTypes } from './action.types';

export function gifReducer(state: IGif, action: Action) {
    switch (action.type) {
        case actionTypes.load:
            return action.payload as IGif;

        default:
            return { ...state };
    }
}
