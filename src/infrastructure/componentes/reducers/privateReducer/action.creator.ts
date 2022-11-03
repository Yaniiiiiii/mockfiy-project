import { IGifsData } from '../../../models/data';
import { actionTypes } from './action.types';

export type Action = {
    type: string;
    payload: IGifsData;
};

export const loadGifAction = (gifData: IGifsData): Action => {
    return {
        type: actionTypes.load,
        payload: gifData,
    };
};

export const addGifAction = (gifData: IGifsData): Action => {
    return {
        type: actionTypes.add,
        payload: gifData,
    };
};

export const updateGifAction = (gifData: IGifsData): Action => {
    return {
        type: actionTypes.update,
        payload: gifData,
    };
};

export const deleteGifAction = (gifData: IGifsData): Action => {
    return {
        type: actionTypes.delete,
        payload: gifData,
    };
};
