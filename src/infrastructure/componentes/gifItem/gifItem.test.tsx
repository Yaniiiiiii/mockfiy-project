import { render, screen } from '@testing-library/react';
import { GifItem } from './gifItem';
import { MemoryRouter as Router } from 'react-router-dom';

describe('Given the gifItem component', () => {
    describe('When we render the component', () => {
        test('then it should display the item´s gif', () => {
            const mockItem = {
                title: 'test',
                id: `test`,
                images: {
                    downsized: {
                        url: 'https://media4.giphy.com/media/mi6DsSSNKDbUY/giphy.gif?cid=4e847dbcoiwns7ccq97ezwn4dc6y3qt2qh6zkq5me7u36eqq&rid=giphy.gif&ct=g',
                    },
                },
            };

            render(
                <Router>
                    <GifItem item={mockItem} />
                </Router>
            );

            expect(screen.getByAltText(/test/i)).toBeInTheDocument();
        });
    });
});
