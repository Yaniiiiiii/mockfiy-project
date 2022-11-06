import { useContext } from 'react';
import { GifContext } from '../../../context/context';
import { IElementData } from '../../../models/data';

export function ButtonDelete({ item }: { item: IElementData }) {
    const { handleUpdate } = useContext(GifContext);

    const handleClickUpdate = () => {
        item;
        handleUpdate(item);
    };

    return (
        <button
            className={`🗑`}
            onClick={handleClickUpdate}
            style={{ width: '150px', height: '50px', fontSize: '2rem' }}
        >
            🗑
        </button>
    );
}
