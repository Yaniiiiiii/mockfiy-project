import { expect, jest, test } from '@jest/globals';
import { renderHook, waitFor } from '@testing-library/react';
import { IElementData } from '../models/data';
import { useLocalGif } from './use.gif';

jest.mock('../services/gifs.local.api');

const gif1 = {
    title: 'Added gif',
    id: '',
    // images: '',
};
const newGif = {
    title: 'Added gif',
    id: '',
    // images: 'IImages',
};

describe('Given', () => {
    let result: {
        current: {
            gifs: Array<IElementData>;
            handleAdd: (newGif: IElementData) => void;
            handlerEraser: (gif: IElementData) => void;
            handlerUpdate: (updateGif: IElementData) => void;
        };
    };

    beforeEach(() => {
        Gi.prototype.getTasks = jest.fn().mockResolvedValue([gif1]);
        TaskApi.prototype.createTask = jest.fn().mockResolvedValue(newGif);
        ({ result } = renderHook(() => useLocalGif()));
    });

    test('should first', async () => {
        await waitFor(() => {
            expect(result.current.gifs).toEqual([gif1]);
        });
    });

    test('should first b', async () => {
        await waitFor(() => {
            result.current.handleAdd(newGif);
            expect(result.current.gifs.at(-1)).toEqual(newGif);
        });
    });
});
