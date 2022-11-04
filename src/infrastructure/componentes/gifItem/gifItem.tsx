import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { GifContext } from '../../context/context';
import { IElementData } from '../../models/data';

export function GifItem({ item }: { item: IElementData }) {
    const { handleAdd } = useContext(GifContext);
    const handleClickAdd = () => {
        handleAdd(item);
    };
    return (
        <li>
            <Link to={`/Details/${item.id}`}>
                <img
                    src={item.images.downsized.url}
                    alt={`gif ${item.title}`}
                ></img>
                <img
                    src={item.images.original.url}
                    alt={'gif' + item.title}
                ></img>
                <button className={`♡`} onClick={handleClickAdd}></button>
            </Link>
        </li>
    );
}
