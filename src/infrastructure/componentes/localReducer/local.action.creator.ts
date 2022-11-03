import { IElementData } from '../../models/data';
import { localActionTypes } from './local.action.types';

export type localAction = {
    type: string;
    payload: Array<IElementData> | IElementData;
};

export const loadLocalGifAction = (gifData: Array<IElementData>) => {
    return {
        type: localActionTypes.load,
        payload: gifData,
    };
};

export const addLocalGifAction = (newGif: IElementData) => {
    return {
        type: localActionTypes.add,
        payload: newGif,
    };
};

export const updateLocalGifAction = (updateGif: IElementData) => {
    return {
        type: localActionTypes.update,
        payload: updateGif,
    };
};

export const deleteLocalGifAction = (deleteGif: IElementData) => {
    return {
        type: localActionTypes.delete,
        payload: deleteGif,
    };
};
