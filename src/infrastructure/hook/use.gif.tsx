import { useCallback, useEffect, useReducer } from 'react';
import * as actions from '../componentes/localReducer/local.action.creator';
import { localReducer } from '../componentes/localReducer/local.reducer';
import { IElementData } from '../models/data';

import {
    createLocalData,
    deleteLocalData,
    getLocalData,
    updateLocalData,
} from '../services/gifs.local.api';

export function useLocalGif() {
    const initialState: Array<IElementData> = [];

    const [localGif, dispach] = useReducer(localReducer, initialState);

    const handleLoad = useCallback(() => {
        getLocalData().then((response) =>
            dispach(actions.loadLocalGifAction(response))
        );
    }, []);

    const handleAdd = (newGif: IElementData) => {
        createLocalData(newGif).then((localGif: IElementData) =>
            dispach(actions.addLocalGifAction(localGif))
        );
    };

    const handleEraaser = (gif: IElementData) => {
        deleteLocalData(Number.parseFloat(gif.id)).then((response) => {
            if (response.ok) {
                dispach(actions.deleteLocalGifAction(gif));
            }
        });
    };

    const handleUpdate = (updateGif: IElementData) => {
        updateLocalData(Number.parseFloat(updateGif.id), updateGif).then(
            (localGif) => {
                dispach(actions.updateLocalGifAction(localGif));
            }
        );
    };

    useEffect(() => {
        handleLoad();
    }, [handleLoad]);

    return {
        localGif,
        handleAdd,
        handleEraaser,
        handleUpdate,
    };
}
