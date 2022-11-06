import { render, screen } from '@testing-library/react';
import { Menu } from '../menu/menu';

describe('When using the footer component', () => {
    describe('When we render the component', () => {
        test('Then should render the h1 "test"', () => {
            render(
                <footer className="footer">
                    <Menu></Menu>
                </footer>
            );
            expect(screen.getByText('Test')).toBeInTheDocument();
        });
    });
});
