import { IElementData } from '../../models/data';

import { localAction } from './local.action.creator';
import { localActionTypes } from './local.action.types';

export function localReducer(
    state: IElementData[] | IElementData,
    action: localAction
) {
    let payload: IElementData;

    switch (action.type) {
        case localActionTypes.load:
            return action.payload as Array<IElementData>;

        case localActionTypes.add:
            payload = action.payload as IElementData;
            return [state, payload];

        case localActionTypes.update:
            payload = action.payload as IElementData;
            return (state as IElementData[]).map((item: IElementData) =>
                item.id === payload.id ? payload : item
            );

        case localActionTypes.delete:
            payload = action.payload as IElementData;
            return (state as IElementData[]).filter(
                (item: IElementData) => item.id !== payload.id
            );

        default:
            // Dijiste que se aceptaba un any ¯\_(ツ)_/¯
            return [...(state as any)];
    }
}
