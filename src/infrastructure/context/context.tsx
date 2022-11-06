import { createContext } from 'react';
import { IElementData } from '../models/data';

export const initialContext: {
    localGif: IElementData[];
    hasError: boolean;
    handleAdd: (newGif: IElementData) => void;
    handleEraser: (gif: IElementData) => void;
    handleUpdate: (updateGif: IElementData) => void;
} = {
    localGif: [],
    hasError: false,
    handleAdd: () => undefined,
    handleEraser: () => undefined,
    handleUpdate: () => undefined,
};

export const GifContext = createContext(initialContext);
