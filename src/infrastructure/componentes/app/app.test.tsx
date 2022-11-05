import { render, screen } from '@testing-library/react';
import { App } from './app';
import { MemoryRouter as Router } from 'react-router-dom';

interface CryptoPlus extends Crypto {
    randomBytes: (arr: number) => void;
    subtle: SubtleCrypto;
}

Object.defineProperty(global.self, 'crypto', {
    value: {
        getRandomValues: (arr: number) =>
            (crypto as CryptoPlus).randomBytes(arr),
    },
});
(global.crypto as CryptoPlus).subtle = {} as SubtleCrypto;

test('renders learn react link', () => {
    render(
        <Router>
            <App />
        </Router>
    );
    const linkElement = screen.getByAltText(/home icon/i);
    expect(linkElement).toBeInTheDocument();
});
