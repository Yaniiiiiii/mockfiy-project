import { useEffect, useReducer } from 'react';
import { getSearchData } from '../../services/gifs.api';
import './app.css';
import * as actions from '../../reducers/action.creator';
import { gifReducer } from '../../reducers/reducer';

export function App() {
    const [Search, dispacher] = useReducer(gifReducer, {
        data: [
            {
                title: ``,
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
    });

    useEffect(() => {
        getSearchData('Testing').then((resps) => {
            dispacher(actions.loadGifAction(resps));
        });
    }, []);

    console.log(Search);

    return (
        <div className="app">
            {Search.data.map((item) => (
                <img src={item.images.original.url} alt="" />
            ))}
        </div>
    );
}
