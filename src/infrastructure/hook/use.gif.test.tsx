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
        downsized: {
            url: 'test',
        },
    },
};
const newGif: IElementData = {
    id: 'test',
    title: 'test',
    images: {
        downsized: {
            url: 'test',
        },
    },
};

describe('Given the custom hook "useGif" component', () => {
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
        (apiCalls.updateLocalData as jest.Mock).mockResolvedValue(newGif);
        (apiCalls.deleteLocalData as jest.Mock).mockResolvedValue({
            gif1,
        });
        ({ result } = renderHook(() => useLocalGif()));
    });

    test('Then should return "gif1"', async () => {
        await waitFor(() => {
            expect(result.current.localGif).toEqual([gif1]);
        });
    });

    test('When we use the handleAdd, then it should return the "newGif" object and been called', async () => {
        await waitFor(() => {
            result.current.handleAdd(newGif);
            expect(result.current.localGif.at(-1)).toEqual(newGif);
        });
        await waitFor(() => {
            expect(apiCalls.createLocalData).toHaveBeenCalled();
        });
    });

    test('When we use handleUpdate then it should return the "newGif" object updated adn been called', async () => {
        await waitFor(() => {
            result.current.handleUpdate(newGif);
            expect(result.current.localGif.at(-1)).toEqual(newGif);
        });
        await waitFor(() => {
            expect(apiCalls.updateLocalData).toHaveBeenCalled();
        });
    });

    test('When we use handleEraser and the response is ok then it should return the same object and been called', async () => {
        await waitFor(() => {
            result.current.handleEraser(gif1);
            expect(result.current.localGif.at(-1)).toEqual(gif1);
        });
        await waitFor(() => {
            expect(apiCalls.deleteLocalData).toHaveBeenCalled();
        });
    });

    test('When we use handleEraser and the response is not ok then it should return nothing but it must be called', async () => {
        (apiCalls.deleteLocalData as jest.Mock).mockResolvedValue({
            ok: true,
        });
        await waitFor(() => {
            result.current.handleEraser(gif1);
            expect(apiCalls.deleteLocalData).toHaveBeenCalled();
        });
    });
});
