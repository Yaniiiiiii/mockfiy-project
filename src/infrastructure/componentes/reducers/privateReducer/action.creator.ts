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
