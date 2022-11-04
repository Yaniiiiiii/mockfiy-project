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
                {menuOptions.map((item) => (
                    <li key={item.id}>
                        <Link to={item.path}>{item.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
