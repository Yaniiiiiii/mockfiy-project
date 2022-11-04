import { Navigate, Route, Routes } from 'react-router-dom';
import { DetailsPage } from '../../../features/details/page/details';
import { FavPage } from '../../../features/favorite/fav.page';
import { HomePage } from '../../../features/home/page/home.page';
import { PrivateRoute } from '../private.route/private.route';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="" element={<HomePage></HomePage>}></Route>
            <Route
                path="/Details"
                element={<DetailsPage></DetailsPage>}
            ></Route>

            <Route
                path="/Fav"
                element={
                    <PrivateRoute>
                        <FavPage></FavPage>
                    </PrivateRoute>
                }
            ></Route>
            <Route path="*" element={<Navigate replace to="" />}></Route>
        </Routes>
    );
}
