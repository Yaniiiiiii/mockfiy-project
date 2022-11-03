import { IElementData } from '../../models/data';
import { localActionTypes } from './local.action.types';

export type localAction = {
    type: string;
    payload: IElementData | IElementData[];
};

export const loadLocalGifAction = (
    gifData: Array<IElementData>
): localAction => {
    return {
        type: localActionTypes.load,
        payload: gifData,
    };
};

export const addLocalGifAction = (newGif: IElementData): localAction => {
    return {
        type: localActionTypes.add,
        payload: newGif,
    };
};

export const updateLocalGifAction = (updateGif: IElementData): localAction => {
    return {
        type: localActionTypes.update,
        payload: updateGif,
    };
};

export const deleteLocalGifAction = (deleteGif: IElementData): localAction => {
    return {
        type: localActionTypes.delete,
        payload: deleteGif,
    };
};
