import { useContext } from 'react';
import { GifContext } from '../../context/context';
import { IElementData } from '../../models/data';
import { GifItem } from '../gifItem/gifItem';

export function Giflist({ data }: { data: Array<IElementData> }) {
    const GifData = data;
    const { hasError } = useContext(GifContext);
    return (
        <section>
            <ul>
                {GifData.map((item: IElementData) => (
                    <GifItem key={item.id} item={item}></GifItem>
                ))}
            </ul>
            <dialog open={hasError}>
                <p>Error</p>
            </dialog>
        </section>
    );
}
