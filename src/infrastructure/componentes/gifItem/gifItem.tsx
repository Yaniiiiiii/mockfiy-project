import { Link, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { GifContext } from '../../context/context';
import { IElementData } from '../../models/data';

export function GifItem({ item }: { item: IElementData }) {
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
            <button
                className={`♡`}
                onClick={handleClickAdd}
                style={{ width: '150px', height: '50px', fontSize: '2rem' }}
            >
                ♡
            </button>
            {location === '/Fav' && (
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
