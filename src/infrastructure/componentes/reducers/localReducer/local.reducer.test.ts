import { IElementData } from '../../../models/data';
import { localActionTypes } from '../localReducer/local.action.types';
import { localReducer } from './local.reducer';

const mockGif = [
    {
        title: 'test',
        id: `test`,
        images: {
            original: {
                url: 'test',
            },
        },
    },
];
export const mockGifTestApi = {
    title: 'Luis',
    id: `Best`,
    images: {
        original: {
            url: 'Api',
        },
    },
};

describe('when actionTypes is load', () => {
    test('then return payload as new state', () => {
        const action = { type: localActionTypes.load, payload: [] };
        const result = localReducer(mockGif, action);
        expect(result).toEqual([]);
    });
    test('Add', () => {
        const state: Array<IElementData> = [];
        const action = { type: localActionTypes.add, payload: mockGif };
        const result = localReducer(state, action);
        expect(result).toEqual([mockGif]);
    });

    test('Delete', () => {
        const state: Array<IElementData> = [mockGifTestApi];
        const action = {
            type: localActionTypes.delete,
            payload: mockGifTestApi,
        };
        const result = localReducer(state, action);
        expect(result).toEqual([]);
    });
    test('Update', () => {
        const state: Array<IElementData> = [mockGifTestApi];
        const action = {
            type: localActionTypes.update,
            payload: mockGifTestApi,
        };
        const result = localReducer(state, action);
        expect(result).toEqual([mockGifTestApi]);
    });
    test('should return the state', () => {
        const result = localReducer([], { type: '', payload: [] });
        expect(result).toEqual([]);
    });
});
