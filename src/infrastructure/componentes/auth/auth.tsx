import { useAuth0 } from '@auth0/auth0-react';
import styles from './auth.module.css';
export function Auth() {
    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
    const handleLogin = () => {
        loginWithRedirect();
    };

    const handleLogout = () => {
        logout();
    };

    return (
        <div className={styles.host}>
            {!isAuthenticated && <button onClick={handleLogin}>Login</button>}
            {isAuthenticated && (
                <>
                    <button onClick={handleLogout}>Logout</button>
                </>
            )}
        </div>
    );
}
