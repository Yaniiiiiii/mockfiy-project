import { Auth } from '../../../infrastructure/componentes/auth/auth';

export function HomePage() {
    return (
        <div className="home">
            <h1>Home</h1>
            <Auth></Auth>
        </div>
    );
}
