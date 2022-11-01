import { IElementData } from '../../models/data';
import { GifItem } from '../gifItem/gifItem';

export function Giflist({ data }: { data: Array<IElementData> }) {
    const GifData = data;
    return (
        <section>
            <ul>
                {GifData.map((item: IElementData) => (
                    <GifItem key="item.title" item={item}></GifItem>
                ))}
            </ul>
        </section>
    );
}
