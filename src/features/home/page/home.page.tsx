import { Auth } from '../../../infrastructure/componentes/auth/auth';
import { SyntheticEvent, useEffect, useReducer, useState } from 'react';
import { gifReducer } from '../../../infrastructure/componentes/reducers/privateReducer/reducer';
import {
    getDataTrending,
    getSearchData,
} from '../../../infrastructure/services/gifs.api';
import * as actions from '../../../infrastructure/componentes/reducers/privateReducer/action.creator';
import { Giflist } from '../../../infrastructure/componentes/gif.list/gif.list';
import { Link, useParams } from 'react-router-dom';
import { Header } from '../../../infrastructure/componentes/header/header';

function HomePage() {
    const { id } = useParams();
    const initialStateTrending = {
        data: [
            {
                id: '',
                title: ``,
                rating: '',
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
    const [trending, trendingDispatch] = useReducer(
        gifReducer,
        initialStateTrending
    );
    // ----------------------------------------------------------------
    const initialStateSearch = {
        data: [
            {
                id: '',
                title: ``,
                rating: '',
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
    // ----------------------------------------------------------------
    const initialForm = {
        search: '',
    };
    const [form, setform] = useState(initialForm);
    const handleForm = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        setform({
            ...form,
            [element.name]: element.value,
        });
    };
    // ----------------------------------------------------------------
    useEffect(() => {
        getSearchData(form.search).then((resps) => {
            searchDispatch(actions.loadGifAction(resps));
        });

        getDataTrending(+(id as string)).then((resps) => {
            trendingDispatch(actions.loadGifAction(resps));
        });
    }, [form.search, id]);
    // ----------------------------------------------------------------

    return (
        <div className="home">
            <Header title="🥸 MOCKIPHY" />
            <Auth></Auth>
            <form>
                <input
                    type="text"
                    placeholder="Search"
                    name="search"
                    value={form.search}
                    onInput={handleForm}
                />
            </form>
            <div className="list--container">
                <>
                    {form.search === '' ? (
                        <>
                            <Giflist data={trending.data}></Giflist>
                            <div className="arrows-home">
                                {id !== '0' && (
                                    <Link
                                        className="link"
                                        to={`/Home/${+(id as string) - 50}`}
                                        onClick={() => {
                                            window.scrollTo(0, 0);
                                        }}
                                    >
                                        {`⬅️`}
                                    </Link>
                                )}
                                <Link
                                    className="link"
                                    to={`/Home/${+(id as string) + 50}`}
                                    onClick={() => {
                                        window.scrollTo(0, 0);
                                    }}
                                >
                                    {`➡️`}
                                </Link>
                            </div>
                        </>
                    ) : (
                        <>
                            <Giflist data={search.data}></Giflist>
                        </>
                    )}
                </>
            </div>
        </div>
    );
}

export default HomePage;
