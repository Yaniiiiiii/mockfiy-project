import { render, screen } from '@testing-library/react';
import { Menu } from '../menu/menu';
import { MemoryRouter as Router } from 'react-router-dom';

describe('When using the footer component', () => {
    describe('When we render the component', () => {
        test('Then should render the h1 "test"', () => {
            render(
                <Router>
                    <footer className="footer">
                        <Menu></Menu>
                    </footer>
                </Router>
            );
            expect(screen.getByAltText('home icon')).toBeInTheDocument();
        });
    });
});
