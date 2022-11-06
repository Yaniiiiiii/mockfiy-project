import { Auth } from '../../../infrastructure/componentes/auth/auth';
import { SyntheticEvent, useEffect, useReducer, useState } from 'react';
import { gifReducer } from '../../../infrastructure/componentes/reducers/privateReducer/reducer';
import {
    getDataTrending,
    getSearchData,
} from '../../../infrastructure/services/gifs.api';
import * as actions from '../../../infrastructure/componentes/reducers/privateReducer/action.creator';
import { Giflist } from '../../../infrastructure/componentes/gif.list/gif.list';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link, useParams } from 'react-router-dom';

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
            <h1>Home</h1>
            <Auth></Auth>
            <form
                style={{
                    display: 'flex',
                    alignItems: ' center',
                    justifyContent: 'center',
                    margin: '10px',
                }}
            >
                <input
                    type="text"
                    placeholder="Search"
                    name="search"
                    value={form.search}
                    onInput={handleForm}
                    style={{ width: '300px', height: '50px', fontSize: '2rem' }}
                />
            </form>
            <div>
                <>
                    {form.search === '' ? (
                        <>
                            <Giflist data={trending.data}></Giflist>
                            {id !== '0' && (
                                <Link
                                    to={`/Home/${+(id as string) - 50}`}
                                    onClick={() => {
                                        window.scrollTo(0, 0);
                                    }}
                                >
                                    {`<-`}
                                </Link>
                            )}
                            <Link
                                to={`/Home/${+(id as string) + 50}`}
                                onClick={() => {
                                    window.scrollTo(0, 0);
                                }}
                            >
                                {`->`}
                            </Link>
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
