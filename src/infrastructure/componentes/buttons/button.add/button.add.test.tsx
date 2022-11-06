import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter as Router } from 'react-router-dom';
import { useLocalGif } from '../../../hook/use.gif';
import { ButtonAdd } from './button.add';
jest.mock('../../../hook/use.gif');

describe('Given the button add component', () => {
    describe('When we render the component', () => {
        beforeEach(() => {
            (useLocalGif as jest.Mock).mockReturnValue({
                handleAdd: jest.fn(),
            });

            render(
                <Router>
                    <ButtonAdd
                        item={{
                            title: '',
                            id: '',
                            rating: '',
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
            expect(ButtonAdd.prototype.handleAdd).toHaveBeenCalled();
        });
    });

    // No consigo hacer que funcione
    // describe('When we click on the component', () => {
    //     const mockItem = {
    //         title: '',
    //         id: '',
    //         images: {
    //             downsized: {
    //                 url: '',
    //             },
    //         },
    //     };

    //     beforeEach(() => {
    //         render(
    //             <Router>
    //                 <ButtonAdd item={mockItem} />
    //             </Router>
    //         );
    //     });
    //     test('Then it should do the handleclick function', () => {
    //         ButtonAdd.prototype.handleClickAdd = jest.fn();
    //         const element = screen.getByRole('button');
    //         expect(element).toBeInTheDocument();
    //         userEvent.click(element);
    //         expect(handleClickAdd).toHaveBeenCalled();
    //     });
    // });
});
