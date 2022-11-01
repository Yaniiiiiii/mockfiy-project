import { useEffect, useState } from 'react';
import { getSearchData } from '../../services/gifs.api';
import './app.css';
import * as actions from '../../reducers/action.creator';

export function App() {
    const [Search, setSearchState] = useState({
        type: '',
        payload: {
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
        },
    });

    useEffect(() => {
        getSearchData('Testing').then((resps) => {
            setSearchState(actions.loadGifAction(resps));
        });
    }, []);

    console.log(Search);

    return (
        <div className="app">
            {Search.payload.data.map((item) => (
                <img src={item.images.original.url} alt="" />
            ))}
        </div>
    );
}
