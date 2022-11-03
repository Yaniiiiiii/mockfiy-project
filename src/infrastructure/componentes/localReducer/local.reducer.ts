import { IElementData } from '../../models/data';
import { actionTypes } from '../privateReducer/action.types';
import { localAction } from './local.action.creator';
import { localActionTypes } from './local.action.types';

export function localReducer(state: Array<IElementData>, action: localAction) {
    let payload: IElementData;

    switch (action.type) {
        case localActionTypes.load:
            return action.payload as Array<IElementData>;

        case actionTypes.add:
            payload = action.payload as IElementData;
            return [state, payload];

        case actionTypes.update:
            payload = action.payload as IElementData;
            return state.map((item: IElementData) =>
                item.id === payload.id ? payload : item
            );

        case actionTypes.delete:
            payload = action.payload as IElementData;
            return state.filter((item: IElementData) => item.id !== payload.id);

        default:
            return { ...state };
    }
}
