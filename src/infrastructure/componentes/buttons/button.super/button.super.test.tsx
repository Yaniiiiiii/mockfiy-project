import { useAuth0 } from '@auth0/auth0-react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter as Router } from 'react-router-dom';
import { useLocalGif } from '../../../hook/use.gif';
import { IElementData } from '../../../models/data';
import { GifContext } from '../../../context/context';
import { ButtonSuper } from './button.super';
jest.mock('@auth0/auth0-react');
jest.mock('../../../hook/use.gif');

describe('Given the button add component', () => {
    describe('When we render the component', () => {
        let mockGif: IElementData;
        let context: {
            localGif: IElementData[];
            hasError: boolean;
            handleAdd: jest.Mock;
            handleEraser: jest.Mock;
            handleUpdate: jest.Mock;
        };

        beforeEach(() => {
            context = {
                localGif: [mockGif],
                hasError: false,
                handleAdd: jest.fn(),
                handleEraser: jest.fn(),
                handleUpdate: jest.fn(),
            };

            const mockItem = {
                title: 'test',
                id: `test`,
                rating: '',
                images: {
                    downsized: {
                        url: 'https://media4.giphy.com/media/mi6DsSSNKDbUY/giphy.gif?cid=4e847dbcoiwns7ccq97ezwn4dc6y3qt2qh6zkq5me7u36eqq&rid=giphy.gif&ct=g',
                    },
                },
            };

            (useLocalGif as jest.Mock).mockReturnValue({
                handleAdd: jest.fn(),
            });

            (useAuth0 as jest.Mock).mockReturnValue({
                isAuthenticated: true,
            });

            Object.defineProperty(window, 'location', {
                value: {
                    pathname: '/Home/0',
                },
            });

            render(
                <Router>
                    <GifContext.Provider value={context}>
                        <ButtonSuper item={mockItem} />
                    </GifContext.Provider>
                </Router>
            );
        });
        test('Then it should render the button', () => {
            const element = screen.getByRole('button');
            expect(element).toBeInTheDocument();

            userEvent.click(element);
            expect(context.handleUpdate).toHaveBeenCalled();
        });
    });
});
