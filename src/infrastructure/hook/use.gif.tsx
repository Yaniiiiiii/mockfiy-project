import { useCallback, useEffect, useReducer } from 'react';
import * as actions from '../componentes/reducers/localReducer/local.action.creator';
import { localReducer } from '../componentes/reducers/localReducer/local.reducer';
import { IElementData } from '../models/data';

import {
    createLocalData,
    deleteLocalData,
    getLocalData,
    updateLocalData,
} from '../services/gifs.local.api';

export function useLocalGif() {
    const initialState: Array<IElementData> = [];

    const [localGif, dispatch] = useReducer(localReducer, initialState);

    const handleLoad = useCallback(() => {
        getLocalData().then((response) =>
            dispatch(actions.loadLocalGifAction(response))
        );
    }, []);

    const handleAdd = (newGif: IElementData) => {
        createLocalData(newGif).then((localGif: IElementData) =>
            dispatch(actions.addLocalGifAction(localGif))
        );
    };

    const handleEraser = (gif: IElementData) => {
        deleteLocalData(gif.id).then((response) => {
            if (response.ok) {
                dispatch(actions.deleteLocalGifAction(gif));
            }
        });
    };

    const handleUpdate = (updateGif: IElementData) => {
        updateLocalData(Number.parseFloat(updateGif.id), updateGif).then(
            (localGif) => {
                dispatch(actions.updateLocalGifAction(localGif));
            }
        );
    };

    useEffect(() => {
        handleLoad();
    }, [handleLoad]);

    return {
        localGif,
        handleAdd,
        handleEraser,
        handleUpdate,
    };
}
