import { Navigate, Route, Routes } from 'react-router-dom';
import { DetailsPage } from '../../../features/details/page/details';
import { FavPage } from '../../../features/favorite/fav.page';
import { HomePage } from '../../../features/home/page/home.page';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="" element={<HomePage></HomePage>}></Route>
            <Route
                path="/Details"
                element={<DetailsPage></DetailsPage>}
            ></Route>
            <Route path="/Fav" element={<FavPage></FavPage>}></Route>
            <Route path="*" element={<Navigate replace to="" />}></Route>
        </Routes>
    );
}
