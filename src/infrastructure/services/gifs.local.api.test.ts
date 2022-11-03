import {
    getLocalData,
    createLocalData,
    deleteLocalData,
    updateLocalData,
} from './gifs.local.api';

describe('Given the gifs.local.api component', () => {
    describe('When we instantiate it', () => {
        test('Then if i use getLocalData function, it should return a Promise of a string', async () => {
            global.fetch = jest
                .fn()
                .mockResolvedValue({ json: jest.fn().mockResolvedValue({}) });
            const result = await getLocalData();
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual({});
        });

        test('Then if i use createLocalData function, it should return a promise of a created gif', async () => {
            const mockGift = {
                title: '',
                id: '',
                images: {
                    original: {
                        url: '',
                    },
                },
            };
            global.fetch = jest.fn().mockResolvedValue({
                json: jest.fn().mockResolvedValue(mockGift),
            });
            const result = await createLocalData(mockGift);
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual(mockGift);
        });

        test('Then if i use deleteLocalData function, it should return a promise of a deleted gif', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                json: jest.fn().mockResolvedValue('deleted'),
            });
            const result = await deleteLocalData('2');
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual('deleted');
        });

        test('Then if i use updateLocalData function, it should return a promise of a deleted gif', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                json: jest.fn().mockResolvedValue('updated'),
            });
            const result = await updateLocalData('1', {
                title: '',
                id: 'TEST',
                images: {
                    original: {
                        url: '',
                    },
                },
            });

            expect(fetch).toHaveBeenCalled();
            expect(result).toBe('updated');
        });
    });
});
