import { Route, Routes } from 'react-router-dom';
import { DetailsPage } from '../../../features/details/page/details';
import { FavPage } from '../../../features/favorite/fav.page';
import { HomePage } from '../../../features/home/page/home.page';
import './app.css';

export function App() {
    return (
        <Routes>
            <div className="app">
                <h2>Probando</h2>
            </div>
            <Route path="" element={<HomePage></HomePage>}></Route>
            <Route
                path="/DetailsPage"
                element={<DetailsPage></DetailsPage>}
            ></Route>
            <Route path="/FavPage" element={<FavPage></FavPage>}></Route>
        </Routes>
    );
}
