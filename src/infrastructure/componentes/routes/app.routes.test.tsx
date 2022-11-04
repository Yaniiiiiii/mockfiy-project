import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { AppRoutes } from './app.routes';

describe('Given AppRoutes component', () => {
    describe('When we render the component and the route is "Home"', () => {
        test('Then should render the Home component', () => {
            render(
                <Router>
                    <AppRoutes />
                </Router>
            );
            expect(screen.getByText('Home')).toBeInTheDocument();
        });
    });

    describe('When we render the component and the route is "Details', () => {
        test('Then should render the Details component', () => {
            render(
                <Router initialEntries={['/Details']}>
                    <AppRoutes />
                </Router>
            );
            expect(screen.getByText('Details')).toBeInTheDocument();
        });
    });

    describe('When we render the component and the route is "Fav"', () => {
        test('Then should render the NotFound component', () => {
            render(
                <Router initialEntries={['/Fav']}>
                    <AppRoutes />
                </Router>
            );
            expect(screen.getByText('Favorite')).toBeInTheDocument();
        });
    });
});
