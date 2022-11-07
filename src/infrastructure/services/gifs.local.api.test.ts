import { IElementData } from '../models/data';
import {
    createLocalData,
    deleteLocalData,
    getLocalData,
    updateLocalData,
} from './gifs.local.api';

describe('Given the gifs.local.api component', () => {
    describe('When we instantiate it', () => {
        test('Then if i use getLocalData function, it should return a Promise of a string', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                json: jest.fn().mockResolvedValue({}),
                ok: true,
            });

            const result = await getLocalData();
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual({});
        });

        test('Then if i use createLocalData function, it should return a Promise of a string', async () => {
            const mockGifList: Array<IElementData> = [
                {
                    title: 'test',
                    id: ``,
                    rating: '',
                    images: {
                        downsized: {
                            url: '',
                        },
                    },
                },
            ];
            global.fetch = jest.fn().mockResolvedValue({
                json: jest.fn().mockResolvedValue({}),
                ok: true,
            });

            const result = await createLocalData(mockGifList[0]);
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual({});
        });

        test('Then if i use deleteLocalData function, it should return a Promise of a string', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                json: jest.fn().mockResolvedValue({}),
                ok: true,
            });

            const result = await deleteLocalData('0');
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual({});
        });

        test('Then if i use updateLocalData function, it should return a Promise of a string', async () => {
            const mockGifList: Array<IElementData> = [
                {
                    title: 'test',
                    id: ``,
                    rating: '',
                    images: {
                        downsized: {
                            url: '',
                        },
                    },
                },
            ];
            global.fetch = jest.fn().mockResolvedValue({
                json: jest.fn().mockResolvedValue({}),
                ok: true,
            });

            const result = await updateLocalData('0', mockGifList[0]);
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual({});
        });
    });
});
