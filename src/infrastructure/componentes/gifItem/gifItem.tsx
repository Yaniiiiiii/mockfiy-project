import { IElementData } from '../../models/data';

export function GifItem({ item }: { item: IElementData }) {
    return (
        <li>
            <img src={item.images.original.url} alt={'gif' + item.title}></img>
        </li>
    );
}
