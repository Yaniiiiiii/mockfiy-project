import { useCallback, useEffect, useReducer, useState } from 'react';
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
    const [hasError, setHasError] = useState(false);

    const handleLoad = useCallback(() => {
        getLocalData()
            .then((response) => dispatch(actions.loadLocalGifAction(response)))
            .catch((error: Error) => {
                console.log(error.message);
                setHasError(true);
            });
    }, []);

    const handleAdd = (newGif: IElementData) => {
        createLocalData(newGif)
            .then((localGif: IElementData) =>
                dispatch(actions.addLocalGifAction(localGif))
            )
            .catch((error: Error) => {
                console.log(error.message);
                setHasError(true);
            });
    };

    const handleEraser = (gif: IElementData) => {
        deleteLocalData(gif.id)
            .then((response) => {
                if (response.ok) {
                    dispatch(actions.deleteLocalGifAction(gif));
                }
                handleLoad();
            })
            .catch((error: Error) => {
                console.log(error.message);
                setHasError(true);
            });
    };

    const handleUpdate = (updateGif: IElementData) => {
        updateLocalData(updateGif.id, updateGif)
            .then((localGif) => {
                dispatch(actions.updateLocalGifAction(localGif));
                handleLoad();
            })
            .catch((error: Error) => {
                console.log(error.message);
                setHasError(true);
            });
    };

    useEffect(() => {
        handleLoad();
    }, [handleLoad]);

    return {
        localGif,
        hasError,
        handleAdd,
        handleEraser,
        handleUpdate,
    };
}
