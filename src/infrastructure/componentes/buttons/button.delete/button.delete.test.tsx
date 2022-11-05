import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { ButtonDelete } from './button.delete';

describe('Given the button add component', () => {
    describe('When we render the component', () => {
        beforeEach(() => {
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
        });
    });
});
