import { getData, getSearchData } from '../../services/gifs.api';
import './app.css';

export function App() {
    getData();
    getSearchData('cactus');
    return <div className="app">Probando</div>;
}
