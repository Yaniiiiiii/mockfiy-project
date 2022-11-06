import { useEffect, useReducer, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Giflist } from '../../../infrastructure/componentes/gif.list/gif.list';
import { Header } from '../../../infrastructure/componentes/header/header';
import * as actions from '../../../infrastructure/componentes/reducers/privateReducer/action.creator';
import { gifReducer } from '../../../infrastructure/componentes/reducers/privateReducer/reducer';

import {
    getGifById,
    getSearchData,
} from '../../../infrastructure/services/gifs.api';

function DetailsPage() {
    const { id } = useParams();

    const initialStateDetails = {
        data: {
            id: '',
            title: ``,
            images: {
                downsized: {
                    url: '',
                },
            },
        },

        pagination: {
            count: 0,
            offset: 0,
        },
    };
    const [gifDetails, gifDetailsState] = useState(initialStateDetails);

    const initialStateSearch = {
        data: [
            {
                id: '',
                title: ``,
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
    const [search, searchDispatch] = useReducer(gifReducer, initialStateSearch);

    useEffect(() => {
        getGifById(id as string).then((resps) => {
            gifDetailsState(resps);
        });

        getSearchData(gifDetails.data.title).then((resps) => {
            searchDispatch(actions.loadGifAction(resps));
        });
    }, [id, gifDetails.data.title]);

    search.data.shift();
    return (
        <>
            <div className="details">
                <h1>
                    <Header title="Details" />
                </h1>
                <img
                    src={gifDetails.data.images.downsized.url}
                    alt={`${gifDetails.data.title} gif`}
                />

                <h2>Related</h2>
                <Giflist data={search.data}></Giflist>
            </div>
        </>
    );
}
export default DetailsPage;
