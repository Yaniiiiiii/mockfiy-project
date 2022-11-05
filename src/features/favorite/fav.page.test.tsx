import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { FavPage } from './fav.page';

describe('Given the fav page component', () => {
    describe('When we render it', () => {
        beforeEach(() => {
            render(
                <Router>
                    <FavPage />
                </Router>
            );
        });
        test('Then it should appear the "My favorite GIFs" header', () => {
            expect(
                screen.getByRole('heading', { name: /my favorite GIFS/i })
            ).toBeInTheDocument();
        });
    });
});
