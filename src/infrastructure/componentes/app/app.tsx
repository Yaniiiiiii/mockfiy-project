import { getData } from '../../services/gifs.api';
import './app.css';

export function App() {
    getData()
    return <div className="app">Probando</div>;
}
