import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './app';
import { MemoryRouter as Router } from 'react-router-dom';

test('renders learn react link', () => {
    render(
        <Router>
            <App />
        </Router>
    );
    const linkElement = screen.getByText(/HomePage/i);
    expect(linkElement).toBeInTheDocument();
});
