import { useContext } from 'react';
import { GifContext } from '../../../context/context';
import { IElementData } from '../../../models/data';

export function ButtonSuper({ item }: { item: IElementData }) {
    const { handleUpdate } = useContext(GifContext);

    const handleClickUpdate = () => {
        if (item.rating !== 'SUPER') {
            item.rating = 'SUPER';
            return handleUpdate(item);
        }
        item.rating = 'any';
        return handleUpdate(item);
    };

    return (
        <button className={`🗑`} onClick={handleClickUpdate}>
            ⭐
        </button>
    );
}
