import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { GifContext } from '../../context/context';
import { IElementData } from '../../models/data';
import { useAuth0 } from '@auth0/auth0-react';

export function GifItem({ item }: { item: IElementData }) {
    const { isAuthenticated } = useAuth0();
    const { handleAdd, handleEraser } = useContext(GifContext);
    const location = window.location.pathname;

    const handleClickAdd = () => {
        handleAdd(item);
    };

    const handleClickDelete = () => {
        handleEraser(item);
    };

    return (
        <li>
            <Link to={`/Details/${item.id}`}>
                <img
                    src={item.images.downsized.url}
                    alt={`gif ${item.title}`}
                ></img>
            </Link>

            {isAuthenticated && (
                <button
                    className={`♡`}
                    onClick={handleClickAdd}
                    style={{ width: '150px', height: '50px', fontSize: '2rem' }}
                >
                    ♡
                </button>
            )}

            {location === '/Fav' && isAuthenticated && (
                <button
                    className={`♡`}
                    onClick={handleClickDelete}
                    style={{ width: '150px', height: '50px', fontSize: '2rem' }}
                >
                    🗑
                </button>
            )}
        </li>
    );
}
