import { render, screen } from '@testing-library/react';
import { IElementData } from '../../models/data';
import { Giflist } from './gif.list';

describe('Given GifList component', () => {
    describe('When we render the component', () => {
        test('then it should display the Gifs List', () => {
            const mockGifList: Array<IElementData> = [
                {
                    title: 'test',
                    id: ``,
                    images: {
                        original: {
                            url: '',
                        },
                    },
                },
            ];
            render(<Giflist data={mockGifList} />);
            const element = screen.getByAltText(/test/i);
            expect(element).toBeInTheDocument();
        });
    });
});
