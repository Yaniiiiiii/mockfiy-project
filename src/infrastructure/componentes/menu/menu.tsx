import { Link } from 'react-router-dom';

export function Menu() {
    const menuOptions = [
        { id: '1', path: 'Home', label: 'HomePage' },
        { id: '2', path: 'Details', label: 'DetailsPage' },
        { id: '3', path: 'Fav', label: 'FavPage' },
    ];
    return (
        <nav>
            <ul>
                <li key={menuOptions[0].id}>
                    <Link to={menuOptions[0].path}>
                        <img src="/assets/home.png" alt="" />
                    </Link>
                </li>
                <li key={menuOptions[2].id}>
                    <Link to={menuOptions[2].path}>
                        <img src="/assets/fav.png" alt="" />
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
