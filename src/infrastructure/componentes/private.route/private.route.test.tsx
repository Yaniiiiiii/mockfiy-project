import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { PrivateRoute } from './private.route';
import { FavPage } from '../../../features/favorite/fav.page';

jest.mock('@auth0/auth0-react');

describe('Given PrivateRoute component', () => {
    describe('When we render the component and user is authenticated', () => {
        beforeEach(() => {
            (useAuth0 as jest.Mock).mockReturnValue({
                isAuthenticated: true,
            });
            render(
                <Router>
                    <PrivateRoute>
                        <FavPage></FavPage>
                    </PrivateRoute>
                </Router>
            );
        });
        test('Then it should display the title', () => {
            const title = new RegExp('PrivateRoute', 'i');
            const element = screen.getByText(title);
            expect(element).toBeInTheDocument();
        });
    });
});
