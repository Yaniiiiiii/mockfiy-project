import { IGifsData } from '../../../models/data';
import { Action } from './action.creator';
import { actionTypes } from './action.types';

export function gifReducer(state: IGifsData, action: Action) {
    if (actionTypes.load) return action.payload;
    return { ...state };
}
