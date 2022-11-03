import { useLocalGif } from '../hook/use.gif';
import { GifContext } from './context';
export function GifContextProvider({ children }: { children: JSX.Element }) {
    const context = useLocalGif();

    return (
        <GifContext.Provider value={context}>{children}</GifContext.Provider>
    );
}
