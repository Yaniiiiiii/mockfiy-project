import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import DetailsPage from './details.page';

describe('Given details.page Component', () => {
    describe('When we render the component', () => {
        beforeEach(() => {
            render(
                <Router>
                    <DetailsPage />
                </Router>
            );
        });

        test('Then it should render the "Details" h1', () => {
            expect(
                screen.getByRole('heading', { name: 'Details' })
            ).toBeInTheDocument();
        });

        test('Then it should render the gif from the id passed', () => {
            expect(
                screen.getByRole('img', { name: /gif/i })
            ).toBeInTheDocument();
        });

        test('Then it should render the  related Giflist', () => {
            expect(screen.getByRole('list')).toBeInTheDocument();
        });
    });
});
