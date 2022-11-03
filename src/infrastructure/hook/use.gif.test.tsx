import { expect, jest, test } from '@jest/globals';
import { renderHook, waitFor } from '@testing-library/react';
import { IElementData } from '../models/data';
import { useLocalGif } from './use.gif';
import * as apiCalls from '../services/gifs.local.api';

jest.mock('../services/gifs.local.api');

const gif1: IElementData = {
    id: 'test',
    title: 'test',
    images: {
        original: {
            url: 'test',
        },
    },
};
const newGif: IElementData = {
    id: 'test',
    title: 'test',
    images: {
        original: {
            url: 'test',
        },
    },
};

describe('Given', () => {
    let result: {
        current: {
            localGif: IElementData[];
            handleAdd: (newGif: IElementData) => void;
            handleEraser: (gif: IElementData) => void;
            handleUpdate: (updateGif: IElementData) => void;
        };
    };

    beforeEach(() => {
        (apiCalls.createLocalData as jest.Mock).mockResolvedValue(newGif);
        (apiCalls.getLocalData as jest.Mock).mockResolvedValue([gif1]);
        ({ result } = renderHook(() => useLocalGif()));
    });

    test('should first', async () => {
        await waitFor(() => {
            expect(result.current.localGif).toEqual([gif1]);
        });
    });

    test('should first b', async () => {
        await waitFor(() => {
            result.current.handleAdd(newGif);
            expect(result.current.localGif.at(-1)).toEqual(newGif);
        });
    });
});
