import { Navigate, Route, Routes } from 'react-router-dom';
import { DetailsPage } from '../../../features/details/page/details';
import { FavPage } from '../../../features/favorite/fav.page';
import { HomePage } from '../../../features/home/page/home.page';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="home" element={<HomePage></HomePage>}></Route>
            <Route path="got" element={<DetailsPage></DetailsPage>}></Route>
            <Route path="todo" element={<FavPage></FavPage>}></Route>
            <Route path="*" element={<Navigate replace to="" />}></Route>
        </Routes>
    );
}
