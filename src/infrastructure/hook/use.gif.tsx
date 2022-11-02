import { useReducer } from 'react';
import { gifLocalReducer } from '../reducers/local.reducer';

export function useGif() {
    const initialState = {
        data: [
            {
                title: ``,
                id: ``,
                images: {
                    original: {
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

    const [gifsLocal, dispatch] = useReducer(gifLocalReducer, initialState);
}
