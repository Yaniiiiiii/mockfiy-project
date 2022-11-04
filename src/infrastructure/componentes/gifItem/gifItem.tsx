import { useContext } from 'react';
import { GifContext } from '../../context/context';
import { IElementData } from '../../models/data';

export function GifItem({ item }: { item: IElementData }) {
    const { handleAdd } = useContext(GifContext);
    const handleClickAdd = () => {
        handleAdd(item);
    };
    return (
        <li>
            <img src={item.images.original.url} alt={'gif' + item.title}></img>
            <button className={`♡`} onClick={handleClickAdd}></button>
        </li>
    );
}
