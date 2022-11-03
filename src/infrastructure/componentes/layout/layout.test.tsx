import { render, screen } from '@testing-library/react';
import { Layout } from './layout';
import { MemoryRouter as Router } from 'react-router-dom';

describe('When using the "layout" component', () => {
    describe('When we render the component', () => {
        test('Then should render the h1 "test"', () => {
            render(
                <Router>
                    <Layout>
                        <h1>Test</h1>
                    </Layout>
                </Router>
            );
            expect(screen.getByText('Test')).toBeInTheDocument();
        });
    });
});
