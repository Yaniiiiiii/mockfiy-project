import { render, screen } from '@testing-library/react';
import { IElementData } from '../../models/data';
import { Giflist } from './gif.list';
import { MemoryRouter as Router } from 'react-router-dom';

describe('Given GifList component', () => {
    describe('When we render the component', () => {
        test('then it should display the Gifs List', () => {
            const mockGifList: Array<IElementData> = [
                {
                    title: 'test',
                    id: ``,
                    images: {
                        downsized: {
                            url: '',
                        },
                    },
                },
            ];
            render(
                <Router>
                    <Giflist data={mockGifList} />
                </Router>
            );
            const element = screen.getByAltText(/test/i);
            expect(element).toBeInTheDocument();
        });
    });
});
