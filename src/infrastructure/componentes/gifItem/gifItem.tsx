import { Link } from 'react-router-dom';
import { IElementData } from '../../models/data';
import { useAuth0 } from '@auth0/auth0-react';
import { ButtonAdd } from '../buttons/button.add/button.add';
import { ButtonDelete } from '../buttons/button.delete/button.delete';
import { ButtonSuper } from '../buttons/button.super/button.super';
import { useContext } from 'react';
import { GifContext } from '../../context/context';

export function GifItem({ item }: { item: IElementData }) {
    const { isAuthenticated } = useAuth0();
    const { hasError } = useContext(GifContext);

    const location = window.location.pathname;

    return (
        <li>
            {item.rating === 'SUPER' && <h1 className="Start">⭐</h1>}
            <Link
                to={`/Details/${item.id}`}
                onClick={() => {
                    window.scrollTo(0, 0);
                }}
            >
                <img
                    src={item.images.downsized.url}
                    alt={`gif ${item.title}`}
                ></img>
            </Link>

            {isAuthenticated && location !== '/Fav' && !hasError && (
                <ButtonAdd item={item} />
            )}

            {location === '/Fav' && isAuthenticated && (
                <>
                    <ButtonDelete item={item} />
                    <ButtonSuper item={item}></ButtonSuper>
                </>
            )}
        </li>
    );
}
