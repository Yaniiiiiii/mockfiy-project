import { render, screen } from '@testing-library/react';
import { useContext } from 'react';
import { IElementData } from '../models/data';

import { GifContext, initialContext } from './context';

describe('Given the context GitContext', () => {
    let TestComponent: () => JSX.Element;
    describe('When a Test Component is wrapper with this context', () => {
        beforeAll(() => {
            const gif: IElementData = {
                title: 'test',
                id: `test`,
                images: {
                    original: {
                        url: 'test',
                    },
                },
            };
            initialContext.handleAdd(gif);
            initialContext.handleEraser(gif);
            initialContext.handleUpdate(gif);
            initialContext.localGif = [gif];
        });
        beforeEach(() => {
            TestComponent = () => {
                const { localGif } = useContext(GifContext);
                return <>{localGif[0].title}</>;
            };
        });
        test('Context values should be used in the component', () => {
            render(
                <GifContext.Provider value={initialContext}>
                    <TestComponent></TestComponent>
                </GifContext.Provider>
            );
            const element = screen.getByText(
                initialContext.localGif[0].title as string
            );
            expect(element).toBeInTheDocument();
        });
    });
});
