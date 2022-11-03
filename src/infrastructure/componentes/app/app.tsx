import {
    createLocalData,
    deleteLocalData,
    getLocalData,
} from '../../services/gifs.local.api';
import './app.css';

export function App() {
    // createLocalData({
    //     title: 'HOLAHOLA',
    //     id: 'TEST',
    //     images: {
    //         original: {
    //             url: '',
    //         },
    //     },
    // });
    deleteLocalData('TEST');

    return (
        <div className="app">
            <h2>Probando</h2>
        </div>
    );
}
