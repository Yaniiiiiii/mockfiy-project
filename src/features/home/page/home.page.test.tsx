import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import HomePage from './home.page';

describe('Given home.page Component', () => {
    describe('When we render the component', () => {
        beforeEach(() => {
            render(
                <Router>
                    <HomePage />
                </Router>
            );
        });

        test('Then it should render the "Home" h1', () => {
            expect(
                screen.getByRole('heading', { name: /MOCKIPHY/i })
            ).toBeInTheDocument();
        });

        test('Then it should render the Giflist', () => {
            expect(screen.getByRole('list')).toBeInTheDocument();
        });
    });

    describe('When we render the component with a search', () => {
        beforeEach(() => {
            render(
                <Router>
                    <HomePage />
                </Router>
            );
        });

        test('Then it should render the "Home" h1', () => {
            expect(
                screen.getByRole('heading', { name: /MOCKIPHY/i })
            ).toBeInTheDocument();
        });

        test('Then it should render the Giflist', () => {
            expect(screen.getByRole('list')).toBeInTheDocument();
        });
    });
});
