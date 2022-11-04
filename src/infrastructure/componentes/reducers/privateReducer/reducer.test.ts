import * as actions from './action.creator';
import { gifReducer } from './reducer';

describe('Given the Reducer component', () => {
    describe('When we use the loadGifAction with an object', () => {
        test('Then it should return the payload', () => {
            const mockObj = {
                data: [
                    {
                        title: ``,
                        id: ``,
                        images: {
                            downsized: {
                                url: '',
                            },
                        },
                    },
                ],
                pagination: {
                    count: 0,
                    offset: 0,
                },
            };
            const result = gifReducer(mockObj, actions.loadGifAction(mockObj));
            expect(result).toEqual(mockObj);
        });
    });

    describe('When we use a useless action', () => {
        test('Then it should return the mockObj', () => {
            const mockObj = {
                data: [
                    {
                        title: ``,
                        id: ``,
                        images: {
                            downsized: {
                                url: '',
                            },
                        },
                    },
                ],
                pagination: {
                    count: 0,
                    offset: 0,
                },
            };
            const result = gifReducer(mockObj, { type: '', payload: mockObj });
            expect(result).toEqual(mockObj);
        });
    });
});
