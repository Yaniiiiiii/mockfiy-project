import { createContext } from 'react';
import { IElementData } from '../models/data';

export const initialContext: {
    localGif: IElementData[];
    handleAdd: (newGif: IElementData) => void;
    handleEraser: (gif: IElementData) => void;
    handleUpdate: (updateGif: IElementData) => void;
} = {
    localGif: [],
    handleAdd: () => undefined,
    handleEraser: () => undefined,
    handleUpdate: () => undefined,
};

export const GifContext = createContext(initialContext);
