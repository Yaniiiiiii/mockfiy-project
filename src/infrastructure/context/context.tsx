import { createContext } from 'react';
import { IElementData } from '../models/data';

const initialContext: {
    gifs: Array<IElementData>;
    handleAdd: (newGif: IElementData) => void;
    handlerEraser: (gif: IElementData) => void;
    handlerUpdate: (gif: IElementData) => void;
} = {
    gifs: [],
    handleAdd: () => undefined,
    handlerEraser: () => undefined,
    handlerUpdate: () => undefined,
};

export const GifContext = createContext(initialContext);
