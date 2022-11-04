import { Link } from 'react-router-dom';
import { IElementData } from '../../models/data';

export function GifItem({ item }: { item: IElementData }) {
    return (
        <li>
            <Link to={`/Details?=/${item.id}`}>
                <img
                    src={item.images.original.url}
                    alt={'gif' + item.title}
                ></img>
            </Link>
        </li>
    );
}
