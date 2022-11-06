import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { GifItem } from './gifItem';
import { useAuth0 } from '@auth0/auth0-react';
jest.mock('@auth0/auth0-react');

describe('Given the gifItem component in Home Page', () => {
    describe('When we render the component and is not authenticated', () => {
        beforeEach(() => {
            Object.defineProperty(window, 'location', {
                value: {
                    pathname: '/Home',
                },
            });

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

            (useAuth0 as jest.Mock).mockReturnValue({
                isAuthenticated: false,
            });

            render(
                <Router>
                    <GifItem item={mockItem} />
                </Router>
            );
        });

        test('then it should display the items gif', () => {
            expect(screen.getByAltText(/test/i)).toBeInTheDocument();
        });
    });

    describe('When we render the component and is authenticated', () => {
        beforeEach(() => {
            Object.defineProperty(window, 'location', {
                value: {
                    pathname: '/Home',
                },
            });

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

            (useAuth0 as jest.Mock).mockReturnValue({
                isAuthenticated: true,
            });

            render(
                <Router>
                    <GifItem item={mockItem} />
                </Router>
            );
        });

        test('then it should display the items gif', () => {
            expect(screen.getByAltText(/test/i)).toBeInTheDocument();
        });

        test('then it should display the add button', () => {
            expect(
                screen.getByRole('button', { name: /♡/i })
            ).toBeInTheDocument();
        });
    });
});

describe('Given the gifItem component in Details Page', () => {
    describe('When we render the component and is not authenticated', () => {
        beforeEach(() => {
            Object.defineProperty(window, 'location', {
                value: {
                    pathname: '/Details',
                },
            });

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

            (useAuth0 as jest.Mock).mockReturnValue({
                isAuthenticated: false,
            });

            render(
                <Router>
                    <GifItem item={mockItem} />
                </Router>
            );
        });

        test('then it should display the items gif', () => {
            expect(screen.getByAltText(/test/i)).toBeInTheDocument();
        });
    });

    describe('When we render the component and is authenticated', () => {
        beforeEach(() => {
            Object.defineProperty(window, 'location', {
                value: {
                    pathname: '/Details',
                },
            });

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

            (useAuth0 as jest.Mock).mockReturnValue({
                isAuthenticated: true,
            });

            render(
                <Router>
                    <GifItem item={mockItem} />
                </Router>
            );
        });

        test('then it should display the items gif', () => {
            expect(screen.getByAltText(/test/i)).toBeInTheDocument();
        });

        test('then it should display the add button', () => {
            expect(
                screen.getByRole('button', { name: /♡/i })
            ).toBeInTheDocument();
        });
    });
});

describe('Given the gifItem component in Fav Page', () => {
    describe('When we render the component and is not authenticated', () => {
        beforeEach(() => {
            Object.defineProperty(window, 'location', {
                value: {
                    pathname: '/Fav',
                },
            });
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

            window.location.pathname = '/Fav';

            (useAuth0 as jest.Mock).mockReturnValue({
                isAuthenticated: false,
            });

            render(
                <Router>
                    <GifItem item={mockItem} />
                </Router>
            );
        });

        test('then it should display the items gif', () => {
            expect(screen.getByAltText(/test/i)).toBeInTheDocument();
        });
    });

    describe('When we render the component and is authenticated', () => {
        beforeEach(() => {
            Object.defineProperty(window, 'location', {
                value: {
                    pathname: '/Fav',
                },
            });

            const mockItem = {
                title: 'test',
                id: `test`,
                rating: 'SUPER',
                images: {
                    downsized: {
                        url: 'https://media4.giphy.com/media/mi6DsSSNKDbUY/giphy.gif?cid=4e847dbcoiwns7ccq97ezwn4dc6y3qt2qh6zkq5me7u36eqq&rid=giphy.gif&ct=g',
                    },
                },
            };

            (useAuth0 as jest.Mock).mockReturnValue({
                isAuthenticated: true,
            });

            render(
                <Router>
                    <GifItem item={mockItem} />
                </Router>
            );
        });

        test('then it should display the items gif', () => {
            expect(screen.getByAltText(/test/i)).toBeInTheDocument();
        });

        test('then it should display the delete button', () => {
            expect(
                screen.getByRole('button', { name: /🧻/i })
            ).toBeInTheDocument();
        });

        test('If item.rating is === ¨SUPER¨ then it should display a Start', () => {
            expect(
                screen.getByRole(`button`, { name: `⭐` })
            ).toBeInTheDocument();
        });
    });
});
