import { Menu } from '../menu/menu';
import { AppRoutes } from '../routes/app.routes';

export function App() {
    return (
        <AppRoutes>
            <Menu></Menu>
        </AppRoutes>
    );
}
