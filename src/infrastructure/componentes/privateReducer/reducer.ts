import { IGifsData } from '../../models/data';
import { Action } from './action.creator';
import { actionTypes } from './action.types';

export function gifReducer(state: IGifsData, action: Action) {
    switch (action.type) {
        case actionTypes.load:
            return action.payload as IGifsData;

        default:
            return { ...state };
    }
}
