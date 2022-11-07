import { useAuth0 } from '@auth0/auth0-react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter as Router, Navigate } from 'react-router-dom';
import { PrivateRoute } from '../private.route/private.route';
import { Auth } from './auth';

jest.mock('@auth0/auth0-react');
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    Navigate: jest.fn(),
}));

describe('Given Auth component', () => {
    describe('When we render the component', () => {
        beforeEach(() => {
            (useAuth0 as jest.Mock).mockReturnValue({
                isAuthenticated: false,
                loginWithRedirect: jest.fn(),
                logout: jest.fn(),
            });
            render(
                <Router>
                    <Auth />
                </Router>
            );
        });
        test('Then it should display "Login"', () => {
            const element = screen.getByText(/Login/i);
            expect(element).toBeInTheDocument();
            userEvent.click(screen.getByRole('button'));
            const loginWithRedirect = useAuth0().loginWithRedirect;
            expect(loginWithRedirect).toHaveBeenCalled();
        });
    });
    describe('When we render the component and user is not authenticated', () => {
        beforeEach(() => {
            (useAuth0 as jest.Mock).mockReturnValue({
                isAuthenticated: false,
            });
            render(
                <Router initialEntries={['handleLogout']} initialIndex={1}>
                    <PrivateRoute>
                        <p>PrivateRoute</p>
                    </PrivateRoute>
                </Router>
            );
        });
        test('Then it should display the title', () => {
            const element = screen.queryByText(/PrivateRoute/i);
            expect(element).toBe(null);
            expect(Navigate).toHaveBeenCalled();
        });
    });
    describe('When we render the component and user is authenticated', () => {
        beforeEach(() => {
            (useAuth0 as jest.Mock).mockReturnValue({
                isAuthenticated: true,
                loginWithRedirect: jest.fn(),
                logout: jest.fn(),
            });
            render(
                <Router initialEntries={['handleLogin']} initialIndex={1}>
                    <Auth />
                </Router>
            );
        });
        test('Then it should display the title', () => {
            const element = screen.getByText(/Logout/i);
            expect(element).toBeInTheDocument();
            userEvent.click(screen.getByRole('button'));
            const logout = useAuth0().logout;
            expect(logout).toHaveBeenCalled();
        });
    });
});
