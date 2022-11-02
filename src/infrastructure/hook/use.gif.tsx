import { useReducer } from 'react';
import { gifLocalReducer } from '../reducers/local.reducer';

export function useGif() {
    const initialState = {
        title: 'test',
        id: ``,
        images: {
            original: {
                url: '',
            },
        },
    };

    const [gifsLocal, dispatch] = useReducer(gifLocalReducer, initialState);
}
