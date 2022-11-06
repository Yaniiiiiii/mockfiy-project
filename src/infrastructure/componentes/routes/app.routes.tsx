import { PrivateRoute } from '../private.route/private.route';
import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import DetailsPage from '../../../features/details/page/details.page';
const HomePage = lazy(() => import('../../../features/home/page/home.page'));
const FavPage = lazy(() => import('../../../features/favorite/fav.page'));

export function AppRoutes() {
    return (
        <Suspense
            fallback={
                <div>
                    <h2>LOADING...</h2>
                    <img src="/assets/spinner.gif" alt="" />
                </div>
            }
        >
            <Routes>
                <Route
                    path={`/Home/:id`}
                    element={<HomePage></HomePage>}
                ></Route>
                <Route
                    path={`/Details/:id`}
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
                <Route
                    path="*"
                    element={<Navigate replace to="/Home/0" />}
                ></Route>
            </Routes>
        </Suspense>
    );
}
