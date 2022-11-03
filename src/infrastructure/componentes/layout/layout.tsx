import { Menu } from '../menu/menu';

export function Layout({ children }: { children: JSX.Element }) {
    return (
        <div>
            <Menu></Menu>
            {children}
        </div>
    );
}
