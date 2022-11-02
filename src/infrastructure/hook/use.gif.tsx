import { useCallback, useReducer } from 'react';
import { gifLocalReducer } from '../reducers/local.reducer';
import {
    createLocalData,
    deleteLocalData,
    getLocalData,
    updateLocalData,
} from '../services/gifs.api';
import * as actions from '../reducers/action.creator';
import { IGifsData } from '../models/data';
import { gifReducer } from '../reducers/reducer';

export function useGif() {
    const initialState = {
        data: [
            {
                title: ``,
                id: ``,
                images: {
                    original: {
                        url: '',
                    },
                },
            },
        ],
        pagination: {
            count: 0,
            offset: 0,
        },
    };

    const [gifsLocal, dispatch] = useReducer(gifReducer, initialState);

    const handleLoad = useCallback(() => {
        getLocalData().then((gifsLocal) =>
            dispatch(actions.loadGifAction(gifsLocal))
        );
    }, []);

    const handleAdd = (newGiF: IGifsData) => {
        createLocalData(newGiF).then((gif: IGifsData) => {
            dispatch(actions.addGifAction(gif));
        });
    };

    const handlerEraser = (gif: IGifsData) => {
        deleteLocalData(+gif.data[0].id).then((response) => {
            if (response.ok) {
                dispatch(actions.deleteGifAction(gif));
            }
        });
    };

    const handlerUpdate = (updateGif: IGifsData) => {
        updateLocalData(+updateGif.data[0].id, updateGif).then((gifsLocal) => {
            dispatch(actions.updateGifAction(updateGif));
        });
    };

    //     useEffect(() => {
    //         handleLoad();
    //     }, [handleLoad]);

    //     return {
    //         gifsLocal,
    //         handleAdd,
    //         handlerEraser,
    //         handlerUpdate,
    //     },
    // }
}
