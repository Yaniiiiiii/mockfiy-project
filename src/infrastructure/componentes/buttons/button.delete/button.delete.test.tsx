import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter as Router } from 'react-router-dom';
import { useLocalGif } from '../../../hook/use.gif';
import { ButtonDelete } from './button.delete';
jest.mock('../../../hook/use.gif');
describe('Given the button add component', () => {
    describe('When we render the component', () => {
        beforeEach(() => {
            (useLocalGif as jest.Mock).mockReturnValue({
                handleEraser: jest.fn(),
            });
            render(
                <Router>
                    <ButtonDelete
                        item={{
                            title: '',
                            id: '',
                            images: {
                                downsized: {
                                    url: '',
                                },
                            },
                        }}
                    />
                </Router>
            );
        });
        test('Then it should render the button', () => {
            expect(screen.getByRole('button')).toBeInTheDocument();
            userEvent.click(screen.getByRole('button'));
            expect(ButtonDelete.prototype.handleEraser).toHaveBeenCalled();
        });
    });
});
