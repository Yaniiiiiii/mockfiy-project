import { useCallback, useReducer } from 'react';
import * as actions from '../componentes/localReducer/local.action.creator';
import { localReducer } from '../componentes/localReducer/local.reducer';
import { IElementData } from '../models/data';
import {
    createLocalData,
    deleteLocalData,
    getLocalData,
} from '../services/gifs.api';

export function useLocalGif() {
    const initialState: Array<IElementData> = [];

    const [localGif, dispach] = useReducer(localReducer, initialState);

    // const handleLoad = useCallback(() => {
    //     getLocalData().then((response) =>
    //         dispach(actions.loadLocalGifAction(response))
    //     );
    // }, []);

    // const handleAdd = (newGif: IElementData) => {
    //     createLocalData(newGif).then((response) =>
    //         dispach(actions.addLocalGifAction(response))
    //     );
    // };

    // const handleEraaser = (gif: IElementData) => {
    //     deleteLocalData(Number.parseFloat(gif.id)).then((response) => {
    //         dispach(actions.deleteLocalGifAction(response));
    //     });
    // };
}
