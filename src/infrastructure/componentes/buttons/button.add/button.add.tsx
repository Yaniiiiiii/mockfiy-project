import { useContext } from 'react';
import { GifContext } from '../../../context/context';
import { IElementData } from '../../../models/data';

export function ButtonAdd({ item }: { item: IElementData }) {
    const { handleAdd } = useContext(GifContext);
    const handleClickAdd = () => {
        handleAdd(item);
    };

    return (
        <button className={`♡`} onClick={handleClickAdd}>
            ♡
        </button>
    );
}
