import { useEffect, useReducer } from 'react';
import { getSearchData } from '../../services/gifs.api';
import './app.css';
import * as actions from '../privateReducer/action.creator';
import { gifReducer } from '../privateReducer/reducer';
import { IElementData } from '../../models/data';

export function App() {
    const [Search, dispacher] = useReducer(gifReducer, {
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
    });

    useEffect(() => {
        getSearchData('Testing').then((resps) => {
            dispacher(actions.loadGifAction(resps));
        });
    }, []);

    console.log(Search);

    return (
        <div className="app">
            <h2>Probando</h2>
            {Search.data.map((item: IElementData) => (
                <img src={item.images.original.url} alt="" />
            ))}
        </div>
    );
}
